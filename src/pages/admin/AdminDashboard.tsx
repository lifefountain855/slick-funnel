import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { X } from "lucide-react"
import StatusDropdown from "@/components/admin/status-dropdown"

type LeadStatus = "New" | "Contacted" | "Meeting" | "Proposal" | "Won" | "Lost"

type Lead = {
  id: string
  business_name: string
  contact_name: string
  email: string
  phone: string | null
  website: string | null
  industry: string | null
  city: string | null
  source: string
  status: LeadStatus
  notes: string | null
  created_at: string
}

const statuses: Record<LeadStatus, { name: LeadStatus; color: string }> = {
  "New": { name: "New", color: "text-sky-300!" },
  "Contacted": { name: "Contacted", color: "text-sky-200!" },
  "Meeting": { name: "Meeting", color: "text-mist-200!" },
  "Proposal": { name: "Proposal", color: "text-green-200!" },
  "Won": { name: "Won", color: "text-green-400!" },
  "Lost": { name: "Lost", color: "text-red-400!" }
}

export function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [selected, setSelected] = useState<Lead | null>(null)
  const [error, setError] = useState("")

  async function loadLeads() {
    const { data, error: loadError } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
    if (loadError) setError("Unable to load leads.")
    else setLeads(data ?? [])
  }

  useEffect(() => {
    void loadLeads()
  }, [])

  async function updateLead(changes: Partial<Lead>) {
    if (!selected) return
    const { data, error: updateError } = await supabase
      .from("leads")
      .update(changes)
      .eq("id", selected.id)
      .select("*")
      .single()

    if (updateError || !data) {
      setError("Unable to update lead.")
      return
    }
    setSelected(data)
    setLeads((current) =>
      current.map((lead) => (lead.id === data.id ? data : lead))
    )
  }

  async function signOut() {
    await supabase.auth.signOut()
    window.location.href = "/admin/login"
  }

  return (
    <div className="min-h-screen bg-mist-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-4xl font-bold text-secondary!">Leads</h1>
            <p className="text-mist-300">Manage audit and contact submissions.</p>
          </div>
          <Button variant="admin" onClick={signOut}>
            Sign out
          </Button>
        </header>

        {error && <p role="alert" className="mb-4 text-mist-600">{error}</p>}

        {/* Dynamic Grid: Swaps between full list and 30/70 sidebar split */}
        <div
          className={`grid gap-6 transition-all duration-300 ${selected
              ? "grid-cols-1 lg:grid-cols-[320px_1fr]"
              : "grid-cols-1"
            }`}
        >
          {/* Condensed Sidebar / Full List */}
          <div className="rounded-2xl border border-mist-900 overflow-hidden h-fit">
            {leads.length === 0 ? (
              <p className="p-8 text-mist-300">No leads yet.</p>
            ) : (
              leads.map((lead) => {
                const isSelected = selected?.id === lead.id
                return (
                  <button
                    key={lead.id}
                    onClick={() => setSelected(lead)}
                    className={`w-full bg-mist-800 text-left p-4 border-mist-500 border-b-2 last:border-b-0 transition-colors ${isSelected
                        ? "bg-mist-850 border-l-4 border-l-primary hover:bg-mist-700"
                        : "hover:bg-mist-700"
                      }`}
                  >
                    <div className="flex justify-between gap-2 items-start">
                      <strong className="text-secondary! truncate font-semibold">
                        {lead.business_name}
                      </strong>
                      <span className={`text-xs shrink-0 rounded bg-mist-900 px-2 py-0.5 ${statuses[lead.status].color} font-medium`}>
                        {lead.status}
                      </span>
                    </div>

                    {/* Full details when full view, condensed when in sidebar */}
                    <p className="text-xs text-mist-200 mt-1 truncate">
                      {lead.contact_name}
                      {!selected &&
                        ` · ${lead.industry || "No industry"} · ${lead.city || "No location"
                        }`}
                    </p>
                    <p className="text-xs text-mist-400 mt-1">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </p>
                  </button>
                )
              })
            )}
          </div>

          {/* Main Selected Lead View (~70% width) */}
          {selected && (
            <aside className="bg-mist-950 rounded-2xl border border-mist-900 p-6 md:p-8 space-y-6 h-fit relative">
              {/* Header with Title and Close X Button */}
              <div className="flex items-start justify-between border-b pb-4 gap-4">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-secondary!">
                    {selected.business_name}
                  </h2>
                  <p className="text-sm text-mist-500 mt-0.5">
                    Added on {new Date(selected.created_at).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close lead details"
                  className="p-1.5 rounded-full hover:bg-mist-900 text-mist-600 hover:text-mist-300 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Lead Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <span className="text-xs text-mist-600 font-medium uppercase tracking-wider">
                    Contact Name
                  </span>
                  <p className="text-mist-200 font-medium">{selected.contact_name}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-mist-600 font-medium uppercase tracking-wider">
                    Email
                  </span>
                  <p>
                    <a
                      className="text-[oklch(from_var(--color-primary)_calc(l_*_1.3)_c_h)] hover:text-[oklch(from_var(--color-primary)_calc(l_*_1.6)_c_h)] underline font-medium"
                      href={`mailto:${selected.email}`}
                    >
                      {selected.email}
                    </a>
                  </p>
                </div>

                {selected.phone && (
                  <div className="space-y-1">
                    <span className="text-xs text-mist-600 font-medium uppercase tracking-wider">
                      Phone
                    </span>
                    <p className="text-mist-200 font-medium">{selected.phone}</p>
                  </div>
                )}

                <div className="space-y-1">
                  <span className="text-xs text-mist-600 font-medium uppercase tracking-wider">
                    Website
                  </span>
                  <p className={`text-${selected.website ? 'mist-200':'accent'} font-medium`}>{selected.website || "None"}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-mist-600 font-medium uppercase tracking-wider">
                    Source
                  </span>
                  <p className="text-mist-200 font-medium">{selected.source}</p>
                </div>

                {selected.industry && (
                  <div className="space-y-1">
                    <span className="text-xs text-mist-600 font-medium uppercase tracking-wider">
                      Industry
                    </span>
                    <p className="text-mist-200 font-medium">{selected.industry}</p>
                  </div>
                )}
              </div>

              {/* Status and Notes Controls */}
              <div className="space-y-4 pt-4 border-t">
                {/* <label className="block text-sm font-medium text-mist-300">
                  Status
                  <select
                    id={"status-select-"+selected.id}
                    value={selected.status}
                    onChange={(e) => void updateLead({ status: e.target.value })}
                    className="mt-1 h-10 w-full rounded-md border border-mist-800 px-3 text-mist-200 bg-mist-900 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {statuses.map((status) => (
                      <option className={`text-${status.color}!`} key={status.name}>{status.name}</option>
                    ))}
                  </select>
                </label> */}
                <StatusDropdown
                  selected={selected}
                  statuses={Object.values(statuses)}
                  updateLead={(data) => void updateLead({ status: data.status as LeadStatus })}
                />

                <label className="block text-sm font-medium text-mist-300">
                  Notes
                  <textarea
                    key={selected.id}
                    defaultValue={selected.notes || ""}
                    onBlur={(e) => void updateLead({ notes: e.target.value })}
                    className="mt-1 min-h-32 w-full rounded-md border border-mist-800 p-3 text-sm text-mist-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Add internal notes about this lead..."
                  />
                </label>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}