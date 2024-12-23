/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n) เพราะ ข้อนี้ใช้ linear search คือจะทำการลูปหาข้อมูลที่ต้องการจนกว่าจะเจอหรือจนหมดชุดข้อมูล 
ยิ่งถ้าข้อมูลที่ต้องการอยู่ลำดับท้ายของชุดข้อมูลก็จะใช้จำนวนรอบการลูปที่เยอะขึ้น

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log n) เพราะ ข้อนี้ใช้ binary search คือทุกครั้งที่ลูปเพื่อหาข้อมูลที่ต้องการขอบเขตการค้นหาก็จะลดลงครึ่งหนึ่ง
เพราะชุดข้อมูลมีการเรียงลำดับตัวอักษรมาแล้ว ทำให้การใช้ binary search ประหยัดเวลามากขึ้น

*/

/* 
Which function is more efficient and why?
Answer: ถ้าในแง่ของเวลา binary search จะทำได้ดีกว่าใช้ความเร็วในการค้นหาดีกว่าแบบ linear search
แต่ในแง่การใช้งานก็ต้องเลือกใช้ให้ถูก เช่น
- ถ้าข้อมูลมีจำนวนน้อยๆ หรือ ไม่ได้มีการเรียงลำดับข้อมูลมาก่อน ก็สามารถใช้ linear search ได้
- ถ้าข้อมูลมีจำนวนมาก หรือ มีการเรียงลำดับมาแล้ว การใช้ binary search ก็จะทำเวลาได้ดีกว่า linear search 
ดังนั้นเราควรเลือกใช้ให้ถูกประเภทเพื่อประสิทธิภาพที่ดีที่สุดในการค้นหาข้อมูล
*/
