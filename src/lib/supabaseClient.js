import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://yblqhkszfywzyzgvyhwv.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlibHFoa3N6Znl3enl6Z3Z5aHd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTMwMTUsImV4cCI6MjAyMzU2OTAxNX0.3GMQPkhCaen4qBavQUtseHA2DMytbmAtS3b5Pvo0PKA')