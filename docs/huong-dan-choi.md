---
title: Hướng Dẫn Trò Chơi
sidebar_position: 4
---

## Mục Tiêu Trò Chơi

Trò chơi **Đại Việt Hắc Thế** là một dạng trò chơi nhập vai tương tác. Trong đó, người chơi nhập 
vai vào một nhân vật trong một thế giới giả tưởng do Quản Trò dẫn dắt. Mục đích của trò chơi 
là để tạo một sân chơi giải trí cho tất cả đối tượng tham gia, từ Quản Trò cho tới Người Chơi.

## Xúc Xắc

Trong quá trình chơi, khi người chơi thực hiện một hành động với kết quả không chắc chắn, 
Quản Trò sẽ yêu cầu người chơi thực hiện kiểm tra kỹ năng thông qua việc gieo xúc xắc. Trò 
chơi Đại Việt Hắc Thế sử dụng xúc xắc 10-mặt mà chúng ta thường dùng trong các trò chơi 
khác, nhưng với một hệ quy luật riêng để xác định kết quả.


Một bài kiểm tra kỹ năng sẽ có một con số thể hiện độ khó của nó, gọi là Độ Khó (viết tắt là 
ĐK). Độ Khó chỉ ra số điểm Dương hoặc Âm cần thiết để vượt qua bài kiểm tra kỹ năng, thể 
hiện việc nhân vật thành công thực hiện hành động của mình. Số điểm thành công này được 
dựa vào kết quả của con số trên mặt của xúc xắc sau khi gieo, với hệ kết quả sau:


Như vậy, theo luật chuẩn, mỗi xúc xắc sẽ có 4 mặt Dương, 4 Mặt Âm và 2 mặt Cân Bằng.
 Quản trò sẽ dựa vào kết quả cuối cùng từ các xúc xắc được gieo để xác định kết quả của hành 
động của người chơi. Nếu tổng số điểm Âm hoặc Dương tùy thuộc Độ Khó, bằng hoặc lớn với 
Độ Khó của bài kiểm tra được tính là thành công. Và ngược lại, nếu tổng số điểm thành công 
nhỏ hơn Độ Khó sẽ được tính là thất bại.

Xúc xắc với giá trị 0 (Cân Bằng) có thể được cá thể thực hiện bài kiểm tra tiêu hao một 1 điểm 
Tâm Lực để chuyển Giá trị 0 thành 1 Âm hoặc 1 Dương. Việc này thể hiện nhân vật đó huy 
động tâm sức của mình để cố gắng hoàn thành mục tiêu trước mắt nhưng lại hao tổn sự cân 
bằng của tinh thần, đẩy tâm thức gần hơn về cục diện rối loạn.

## Vận Dụng Kỹ Năng
Khi nhân vật muốn thực hiện một việc mà khả năng thành công chưa được chắc chắn. Quản 
Trò (QT) sẽ đề nghị người chơi thực hiện một bài kiểm tra năng lực bằng cách gieo xúc xắc. Và Quản trò sẽ dựa vào kết quả cuối cùng từ các xúc xắc được gieo để xác định kết quả của hành động của người chơi.

Bài kiểm tra năng lực, gọi tắt là xét năng lực (hay Xét), này gồm có hai phần: số lượng xúc xắc 
và Độ Khó:
- Số lượng xúc xắc được gieo sẽ phụ thuộc vào cấp độ Hành Khí và Kỹ Năng của nhân 
vật phù hợp với bài kiểm tra.
- Độ Khó của bài kiểm tra là số lượng điểm thành công tối thiểu cần thiết để nhân vật 
thành công hành động được thực hiện.

Bài kiểm tra năng lực luôn có hai kết quả nhất định: thành công hoặc thất bại. 

Trong nhiều trường hợp, kết quả thành công cao hơn Độ Khó được tính là chí thành với hiệu 
ứng tích cực được thêm vào kết quả của hành động. Và ngược lại, kết quả xúc xắc quá dưới 
mức Độ Khó được tính là chí bại với hiệu ứng tiêu cực xảy ra cho nhân vật và hoàn cảnh.

```
VD: Một kiếm sĩ tấn công áp đảo với Hỏa Hành cấp-3, và Võ Thuật cấp-2 sẽ gieo 5 xúc xắc d10 (gọi tắt là 5d10)
```

<ol className="timeline">

  <li>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
    </svg>
    #### Bước 1
    - Xác định tính khả thi và Độ Khó của bài xét năng lực. Thường được thể hiện bằng là số lượng điểm Âm hoặc Dương cần thiết.
    - Mặc định của Trò Chơi sẽ dùng điểm Dương vì nó biểu hiện sự vận động cũng như lực lượng chủ chốt của sự sống so với điểm Âm.
  </li>
  <li>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
    </svg>
    #### Bước 2
    - Xác định Kỹ năng và Hành phương cần thiết bài xét năng lực. Với tổng số xúc xắc d10 cơ bản bằng với tổng cấp bậc của Kỹ năng và Hành phương đó.
    - Áp dụng các cơ chế thêm giảm xúc xắc hoặc điều chỉnh giá trị xúc xắc (nếu có)
  </li>
  <li>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
    </svg>
    #### Bước 3
    - Gieo xúc xắc và xác định kết quả điểm Âm và Dương dựa trên kết quả giá trị của xúc xắc được gieo.
    - Áp dụng các cơ chế thay đổi kết quả giá trị của xúc xắc (nếu có).
    - Ở bước này, nhân vật có thể tiêu hao một lượng điểm Tâm Lực (tối đa bằng cấp bậc Hành phương) tương đương để thay đổi giá trị xúc xắc kết quả Thái Cực thành Thiếu Âm hoặc Thiếu Dương
  </li>
  <li>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
    </svg>
    #### Bước 4
    - Áp dụng kết quả bài xét
    - Kết quả thành công nếu số lượng giá trị Âm Dương thỏa mãn Độ Khó của bài xét. Nhân vật thành công thực hiện hành động của mình.
    - Kết quả thất bại nếu số lượng giá trị Âm Dương không thỏa mãn Độ Khó của bài xét. Nhân vật thất bại hành động của mình.
  </li>
  <li>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
    </svg>
    #### Bước 5
    - Số lượng giá trị dư (Âm, Dương, Thái Cực) có thể được sử dụng cho những hiệu ứng hợp lệ khác (nếu có) được kích hoạt bởi bài xét năng lực.
  </li>
</ol>