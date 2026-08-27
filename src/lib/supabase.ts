import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mnxusyljyqcpqwqoxxfg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ueHVzeWxqeXFjcHF3cW94eGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4MTM5NjMsImV4cCI6MjEwMzM4OTk2M30.xNZq7G9lyPg1SeGzYIqaLXYyS12bQtC0k2-CDKX2KiU'

export const supabase = createClient(supabaseUrl, supabaseKey)
