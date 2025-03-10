
/* supabaseClient.js
   اگر از نسخه‌ی UMD کتابخانه استفاده می‌کنید، 
   دیگر import لازم نیست؛ زیرا window.supabase قبلاً تعریف شده است.
*/

/* گام اول: آدرس پروژه و کلید ناشناس‌ (anon key) خود را بگذارید */
const SUPABASE_URL = "https://qspwsdjqjyogphzdnwfv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcHdzZGpxanlvZ3BoemRud2Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1OTk4MDgsImV4cCI6MjA1NzE3NTgwOH0.UCMNtrMBMIxefS5SAtTPU8br-97u60DJG1HJF2iRUms";

/* از window.supabase که کتابخانه UMD ایجاد کرده استفاده می‌کنیم */
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* یک تابع کمکی اختیاری برای تست */
async function testConnection() {
  try {
    let { data, error } = await supabase.from('test_table').select('*');
    if (error) {
      console.error("Supabase Error:", error);
    } else {
      console.log("Test Table Data:", data);
    }
  } catch (err) {
    console.error("Connection Error:", err);
  }
}

/* برای اینکه در بقیه فایل‌ها (مثلاً account.html) بتوانیم از این استفاده کنیم،
   بهتر است یک متغیر سراسری تعریف کنیم */
window.mySupabase = supabase;

// در صورت تمایل می‌توانید تابع testConnection را هم به گلوبال بدهید:
window.testConnection = testConnection;
