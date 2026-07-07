const express = require('express');
const app = express();
// Render จะกำหนด Port มาให้ผ่าน environment variable ถ้าไม่มีจะใช้ 3000
const PORT = process.env.PORT || 3000;

// เมื่อมี Request (คำร้องขอ) เข้ามาที่หน้าแรก (/)
app.get('/', (req, res) => {
    // แก้ไขข้อมูลตรงนี้เป็นของตัวคุณเองได้เลยครับ
    const studentId = "69319010620"; 
    const studentName = "บุญฑิตา กองทองนอก";
    const major = "HIT1/1 VB"; // เพิ่มสาขาให้ดูเต็มขึ้น
    
    // ส่ง Response (การตอบกลับ) เป็น HTML ที่ตกแต่งแล้ว
    res.send(`
        <!DOCTYPE html>
        <html lang="th">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Web Server Response</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Prompt', 'Kanit', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
                body {
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 20px;
                }
                .container {
                    background: rgba(255, 255, 255, 0.95);
                    padding: 40px 30px;
                    border-radius: 20px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                    width: 100%;
                    max-width: 450px;
                    text-align: center;
                    transition: transform 0.3s ease;
                }
                .container:hover {
                    transform: translateY(-5px);
                }
                .badge {
                    display: inline-block;
                    background: #e2e8f0;
                    color: #4a5568;
                    padding: 6px 16px;
                    border-radius: 50px;
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 20px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                h1 {
                    color: #2d3748;
                    font-size: 24px;
                    margin-bottom: 10px;
                }
                .subtitle {
                    color: #718096;
                    font-size: 14px;
                    margin-bottom: 25px;
                }
                .divider {
                    height: 2px;
                    background: linear-gradient(to right, #667eea, #764ba2);
                    margin-bottom: 25px;
                    border-radius: 2px;
                }
                .info-box {
                    background: #f7fafc;
                    padding: 15px;
                    border-radius: 12px;
                    margin-bottom: 15px;
                    text-align: left;
                    border-left: 4px solid #764ba2;
                }
                .info-label {
                    font-size: 12px;
                    color: #a0aec0;
                    text-transform: uppercase;
                    margin-bottom: 4px;
                    font-weight: bold;
                }
                .info-value {
                    font-size: 16px;
                    color: #2d3748;
                    font-weight: 500;
                }
                .status {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 25px;
                    font-size: 13px;
                    color: #48bb78;
                }
                .status-dot {
                    width: 8px;
                    height: 8px;
                    background-color: #48bb78;
                    border-radius: 50%;
                    margin-right: 8px;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(72, 187, 120, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(72, 187, 120, 0); }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <span class="badge">Lab Assignment</span>
                <h1>ใบงานปฏิบัติการ</h1>
                <p class="subtitle">การสร้างและจำลอง Web Server พื้นฐาน</p>
                
                <div class="divider"></div>
                
                <div class="info-box">
                    <div class="info-label">รหัสนักศึกษา</div>
                    <div class="info-value">${studentId}</div>
                </div>
                
                <div class="info-box">
                    <div class="info-label">ชื่อ - นามสกุล</div>
                    <div class="info-value">${studentName}</div>
                </div>

                <div class="info-box">
                    <div class="info-label">สาขาวิชา</div>
                    <div class="info-value">${major}</div>
                </div>
                
                <div class="status">
                    <div class="status-dot"></div>
                    <span>Web Server Response: Success (200 OK)</span>
                </div>
            </div>
        </body>
        </html>
    `);
});

// เปิดให้ Server รอรับ Request ตาม Port ที่กำหนด
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
