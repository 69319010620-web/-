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

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }

                @keyframes pulse {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(72, 187, 120, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(72, 187, 120, 0); }
                }

                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes slideInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                body {
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #0f172a;
                    padding: 20px;
                    position: relative;
                    overflow: hidden;
                }

                /* Animated background elements */
                .background-animation {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
                    background-size: 400% 400%;
                    animation: gradientShift 15s ease infinite;
                }

                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(50px);
                    opacity: 0.3;
                }

                .blob1 {
                    width: 300px;
                    height: 300px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    top: -50px;
                    left: -50px;
                    animation: float 20s infinite;
                }

                .blob2 {
                    width: 250px;
                    height: 250px;
                    background: linear-gradient(135deg, #f093fb, #f5576c);
                    top: 50%;
                    right: -50px;
                    animation: float 25s infinite reverse;
                }

                .blob3 {
                    width: 280px;
                    height: 280px;
                    background: linear-gradient(135deg, #4facfe, #00f2fe);
                    bottom: -50px;
                    left: 50%;
                    animation: float 22s infinite;
                }

                .blob4 {
                    width: 200px;
                    height: 200px;
                    background: linear-gradient(135deg, #43e97b, #38f9d7);
                    top: 20%;
                    left: 10%;
                    animation: float 28s infinite reverse;
                }

                .particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    animation: float 15s infinite;
                }

                .particle:nth-child(1) { top: 10%; left: 20%; animation-duration: 20s; }
                .particle:nth-child(2) { top: 30%; right: 15%; animation-duration: 25s; }
                .particle:nth-child(3) { bottom: 20%; left: 30%; animation-duration: 22s; }
                .particle:nth-child(4) { top: 50%; right: 10%; animation-duration: 28s; }

                .container {
                    background: rgba(15, 23, 42, 0.8);
                    backdrop-filter: blur(10px);
                    padding: 50px 40px;
                    border-radius: 25px;
                    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3), 
                                0 0 40px rgba(244, 63, 94, 0.1),
                                inset 0 1px 0 rgba(255, 255, 255, 0.1);
                    width: 100%;
                    max-width: 500px;
                    text-align: center;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    z-index: 10;
                    position: relative;
                    animation: slideInUp 0.8s ease-out;
                }

                .container:hover {
                    box-shadow: 0 25px 70px rgba(102, 126, 234, 0.4), 
                                0 0 50px rgba(244, 63, 94, 0.15),
                                inset 0 1px 0 rgba(255, 255, 255, 0.15);
                    transform: translateY(-8px);
                    transition: all 0.3s ease;
                }

                .badge {
                    display: inline-block;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: #ffffff;
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-size: 12px;
                    font-weight: 700;
                    margin-bottom: 25px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
                    animation: slideInDown 0.6s ease-out;
                }

                h1 {
                    color: #ffffff;
                    font-size: 32px;
                    margin-bottom: 10px;
                    font-weight: 800;
                    background: linear-gradient(135deg, #667eea, #f5576c);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: slideInDown 0.7s ease-out 0.1s both;
                }

                .subtitle {
                    color: #cbd5e1;
                    font-size: 15px;
                    margin-bottom: 30px;
                    font-weight: 500;
                    animation: slideInDown 0.7s ease-out 0.2s both;
                }

                .divider {
                    height: 3px;
                    background: linear-gradient(to right, #667eea, #764ba2, #f5576c);
                    margin-bottom: 30px;
                    border-radius: 2px;
                    animation: slideInDown 0.7s ease-out 0.3s both;
                }

                .info-box {
                    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(244, 63, 94, 0.1));
                    padding: 18px;
                    border-radius: 15px;
                    margin-bottom: 18px;
                    text-align: left;
                    border-left: 4px solid #667eea;
                    border: 1px solid rgba(102, 126, 234, 0.3);
                    backdrop-filter: blur(5px);
                    transition: all 0.3s ease;
                    animation: slideInUp 0.6s ease-out backwards;
                }

                .info-box:nth-child(5) { animation-delay: 0.3s; }
                .info-box:nth-child(6) { animation-delay: 0.4s; }
                .info-box:nth-child(7) { animation-delay: 0.5s; }

                .info-box:hover {
                    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(244, 63, 94, 0.2));
                    border-left-color: #f5576c;
                    transform: translateX(5px);
                    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
                }

                .info-label {
                    font-size: 11px;
                    color: #94a3b8;
                    text-transform: uppercase;
                    margin-bottom: 6px;
                    font-weight: 700;
                    letter-spacing: 1px;
                }

                .info-value {
                    font-size: 18px;
                    color: #e2e8f0;
                    font-weight: 600;
                }

                .status {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 35px;
                    font-size: 14px;
                    color: #48bb78;
                    font-weight: 600;
                    animation: slideInUp 0.6s ease-out 0.6s both;
                }

                .status-dot {
                    width: 10px;
                    height: 10px;
                    background-color: #48bb78;
                    border-radius: 50%;
                    margin-right: 10px;
                    animation: pulse 2s infinite;
                }

                .decorative-circle {
                    position: absolute;
                    border-radius: 50%;
                    border: 2px solid rgba(102, 126, 234, 0.2);
                    animation: rotate 20s linear infinite;
                }

                .circle1 {
                    width: 120px;
                    height: 120px;
                    top: -60px;
                    right: -60px;
                }

                .circle2 {
                    width: 80px;
                    height: 80px;
                    bottom: -40px;
                    left: -40px;
                    animation: rotate 15s linear infinite reverse;
                }

                @media (max-width: 600px) {
                    .container {
                        padding: 35px 25px;
                        max-width: 100%;
                    }

                    h1 {
                        font-size: 24px;
                    }

                    .info-value {
                        font-size: 16px;
                    }
                }
            </style>
        </head>
        <body>
            <!-- Animated Background -->
            <div class="background-animation">
                <div class="blob blob1"></div>
                <div class="blob blob2"></div>
                <div class="blob blob3"></div>
                <div class="blob blob4"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>

            <!-- Main Container -->
            <div class="container">
                <div class="decorative-circle circle1"></div>
                <div class="decorative-circle circle2"></div>

                <span class="badge">✨ Lab Assignment</span>
                <h1>ใบงานปฏิบัติการ</h1>
                <p class="subtitle">การสร้างและจำลอง Web Server พื้นฐาน</p>
                
                <div class="divider"></div>
                
                <div class="info-box">
                    <div class="info-label">🎓 รหัสนักศึกษา</div>
                    <div class="info-value">${studentId}</div>
                </div>
                
                <div class="info-box">
                    <div class="info-label">👤 ชื่อ - นามสกุล</div>
                    <div class="info-value">${studentName}</div>
                </div>

                <div class="info-box">
                    <div class="info-label">📚 สาขาวิชา</div>
                    <div class="info-value">${major}</div>
                </div>
                
                <div class="status">
                    <div class="status-dot"></div>
                    <span>Web Server Response: Success (200 OK) 🚀</span>
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
