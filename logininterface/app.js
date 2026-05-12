// Initialise connection to Supabase with URL and Key (from Supabase)
const supabaseUrl = 'https://mdegswqohtlaorrisefp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kZWdzd3FvaHRsYW9ycmlzZWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMjUyNzIsImV4cCI6MjA5MzcwMTI3Mn0.SM7ClV7nugLmssOErywQZ4OXy1MNKpIY9bidUkPTz30'; // PUBLIC anon key
// Use 'supabase' (the library) to create 'sbClient' (your connection)
const sbClient = supabase.createClient(supabaseUrl, supabaseKey);

// Notify if connection is successful
console.log("Database connection successful");