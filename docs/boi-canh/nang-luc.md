---
title: Năng Lực
sidebar_position: 3
---

**Năng lực** là chỉ số về các thuộc tính Vật lý hoặc Tinh thần của các Sinh vật trong thế giới này (bao gồm cả Nhân vật người chơi).
Có tất cả 5 kỹ năng chính và có nguồn gốc từ [Ngũ Hành](/boi-canh/ngu-hanh-dai-phuong.md).

<div style={{display: "flex", gap: "25px", justifyContent: "center"}}>
    <div style={{textAlign: "center"}}>
        <img src={require('/img/icons/strength-ability.png').default}  width="100" alt="Sức mạnh icon" />
        <div>Sức lực</div>
    </div>

    <div style={{textAlign: "center"}}>
        <img src={require('/img/icons/willpower-ability.png').default}  width="100" alt="Tâm lực icon" />
        <div>Tâm lực</div>
    </div>
</div>

## Tổng Quan
5 chỉ số năng lực mà nhân vật sẽ có là:
- Sức Lực (SL): sức mạnh về thể chất
- Tâm Lực (TL): sức mạnh về tâm lực
- Chú Tâm (CT):
- Cảnh Giác (CG):
- Tốc Độ (TĐ):

Các chỉ số này sẽ được tính trong lúc Khởi tạo nhân vật.


### Sức Lực

Sức Lực đại diện cho khả năng vận dụng công sức của cơ thể. Khi Sức lực cạn kiệt (Sức lực = 0), nhân vật không thể vận sức để chống cự hoặc không tránh các mối nguy hiểm, đặc biệt là trong chiến đấu. Khí đó, các tổn thương tác động lên nhân vật sẽ trở thành sát thương.

Chỉ số Sức Lực tối đa của nhân vật được tính bằng 5 cộng với tổng của 3 hành <MocHanhColor gradient="false">Mộc</MocHanhColor>, <HoaHanhColor gradient="false">Hỏa</HoaHanhColor> và <ThoHanhColor gradient="false">Thổ</ThoHanhColor>. 

<pre>
    <p style={{margin: 0}}>SL = 5 + ( <MocHanhColor gradient="false">Mộc</MocHanhColor> + <HoaHanhColor gradient="false">Hỏa</HoaHanhColor> + <ThoHanhColor gradient="false">Thổ</ThoHanhColor> )</p>
</pre>



### Tâm Lực

Tâm Lực đại diện cho khả năng ổn định hóa và chịu đựng các tác động làm mất cân bằng trong tâm cảnh và tinh thần của nhân vật. Trong quá trình phiêu lưu, nhân vật sẽ phải đối diện với những quyết định, hành động của bản thân và các yếu tố môi trường ngoại cảnh khác tác động lên sự cân bằng này.

Khi sự bất cân bằng và ức chế trong tâm cảnh đạt đến đỉnh điểm, nhân vật không còn đủ tâm lực để duy trì trạng thái ổn định của tinh thần mà rơi vào trạng thái Loạn Tâm. Ở trạng thái này, nhân vật vì tinh thần rối loạn mà mất đi cảnh giác với các nguy cơ từ bên ngoài (Cảnh Giác giảm xuống còn =1).

Để thoát khỏi trạng thái ức chế này, nhân vật cần phải giải tỏa cảm xúc nội hàm bằng việc phát tiết chúng ra bên ngoài. Có nhiều phương pháp để giải tỏa tùy thuộc vào tình huống, nhưng đa số đều sẽ gây ra ảnh hưởng nhất định tới Danh Tiếng hoặc Nhân Phẩm của nhân vật. 

Chỉ số Tâm Lực tối đa của nhân vật được tính bằng tổng của 3 hành <ThoHanhColor gradient="false">Thổ</ThoHanhColor>, <KimHanhColor gradient="false">Kim</KimHanhColor> và <ThuyHanhColor gradient="false">Thủy</ThuyHanhColor>. 

<pre>
    <p style={{margin: 0}}>TL = <ThoHanhColor gradient="false">Thổ</ThoHanhColor> + <KimHanhColor gradient="false">Kim</KimHanhColor> + <ThuyHanhColor gradient="false">Thủy</ThuyHanhColor> </p>
</pre>


### Chú Tâm
Chú Tâm đại diện cho khả năng chủ động phản ứng trước các mối nguy hiểm trong ngữ cảnh hiện tại. Chú Tâm là chỉ số Chủ Động căn bản của nhân vật khi xung đót xảy ra và đóng góp vào cách tính kết quả Chủ Động để quyết định thứ tự lượt đi của mỗi cá thể tham gia xung đót.

Chỉ số Chú Tâm tối đa của nhân vật được tính bằng tổng của 3 hành <KimHanhColor gradient="false">Kim</KimHanhColor>, <ThuyHanhColor gradient="false">Thủy</ThuyHanhColor> và <MocHanhColor gradient="false">Mộc</MocHanhColor>.

<pre>
    <p style={{margin: 0}}>CT = <KimHanhColor gradient="false">Kim</KimHanhColor> + <ThuyHanhColor gradient="false">Thủy</ThuyHanhColor> + <MocHanhColor gradient="false">Mộc</MocHanhColor> </p>
</pre>


### Cảnh Giác

Cảnh Giác đại diện cho khả năng tự động phòng bị và phát hiện những nguy cơ tiềm tàng trong ngữ cảnh và môi trường xung quanh. Cấp độ Cảnh Giác của nhân vật cũng là Độ Khó để nhân vật đó bị đánh lừa, dụ dỗ, cũng như ám toán trong khi đang tiếp diễn một hành động khác.


### Tốc Độ
Tốc Độ đại diện cho khoảng cách tối đa mà nhân vật có thể di chuyển tự do ở mỗi lượt của mình. Mỗi nhân vật có thể di chuyển tự do khoảng cách bằng với Tốc độ mỗi lượt mà không cần tiêu hao hành động của mình. Tốc Độ có đơn vị là bộ (1 bộ ~ 1.5 mét).


## Xét Năng Lực
Hay gọi ngắn là bài Xét. Khi nhân vật của mình thực hiện xét kỹ năng. Người chơi sẽ gieo một lượng xúc xắc 10-mặt (còn gọi là d10) bằng với tổng của cấp bậc Hành Phương và cấp bậc của Kỹ Năng được sử dụng.

```
VD: Một kiếm sĩ tấn công áp đảo với Hỏa Hành cấp-3, và Võ Thuật cấp-2 sẽ gieo 5 xúc xắc d10 (gọi tắt là 5d10)
```

Quản trò sẽ dựa vào kết quả cuối cùng từ các xúc xắc được gieo để xác định kết quả của hành động của người chơi. Nếu tổng số điểm Âm hoặc Dương tùy thuộc Độ Khó, bằng hoặc lớn với Độ Khó của bài kiểm tra được tính là thành công. Và ngược lại, nếu tổng số điểm thành công nhỏ hơn Độ Khó sẽ được tính là thất bại.

Xúc xắc với giá trị 0 (Cân Bằng) có thể được cá thể thực hiện bài kiểm tra tiêu hao một 1 điểm Tâm Lực để chuyển Giá trị 0 thành 1 Âm hoặc 1 Dương. Việc này thể hiện nhân vật đó huy động tâm sức của mình để cố gắng hoàn thành mục tiêu trước mắt nhưng lại hao tổn sự cân bằng của tinh thần, đẩy tâm thức gần hơn về cục diện rối loạn.

::::warning
Mặc định của bài xét sẽ luôn lấy Dương làm Độ Khó, vì khí Dương đại diện cho sự vận động của Khí. Những bài xét lấy Âm làm Độ Khó luôn được chú thích một cách rõ ràng. 
::::


### Bảng Độ Khó

| Độ Khó | Ý Nghĩa     |
|--------|-------------|
| 1      | Dễ          |
| 2      | Khá Dễ      |
| 3      | Trung Bình  |
| 4      | Khó         |
| 5      | Rất Khó     |
| 6      | Cực kỳ khó  |
| 7+     | Bất khả thi |

### Chí Thành
Hiệu ứng Chí Thành chỉ có tác dụng khi bài xét năng lực đạt kết quả thành công. Trong đó, cấp bậc chí thành tương ứng với số điểm thành công cao hơn Độ Khó. Cấp bậc này sẽ ảnh hưởng lên hiệu quả thành công tùy thuộc vào bản chất của bài xét năng lực

```
Ví dụ: Một bài xét năng lực đạt 5 điểm thành công với Độ Khó 2, sẽ có cấp bậc chí thành là 3.
```

Những hiệu ứng tăng thêm hoặc cộng dồn điểm chí thành vào bài xét năng lực chỉ hoạt động khi bài xét đó có kết quả thành công.

### Chí Bại
Tương tự như hiệu ứng chí thành, hiệu ứng chí bại chỉ có tác dụng khi bài xét năng lực đạt kết quả thất bại. Trong đó, cấp bậc chí bại tương ứng với số điểm thành công thấp hơn Độ Khó. Cấp bậc này sẽ ảnh hưởng lên hiệu quả thất bại tùy thuộc vào bản chất của bài xét năng lực

```
Ví dụ: Một bài xét năng lực đạt 2 điểm thành công với Độ Khó 5, sẽ có cấp bậc chí bại là 3.
```

Những hiệu ứng tăng thêm hoặc cộng dồn điểm chí bại vào bài xét năng lực chỉ hoạt động khi bài xét đó có kết quả thất bại.