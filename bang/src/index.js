const data = [
    {
      id: "PH05065",
      name: "Lê Tuấn Anh",
      email: "anhltph05065@fpt.edu.vn	",
      phone: "0336654724",
      start_date: "2020-09-16",
      status: true,
      age: 20
    },
    {
      id: "PH07983",
      name: "Đào Công Thành	",
      email: "thanhdcph07983@fpt.edu.vn	",
      phone: "0961284065",
      start_date: "2020-09-12	",
      status: false,
      age: 25
    }
  ];
  const content = document.querySelector("#content");
  console.log(content);
  const result = data
    .map((student, index) => {
      return `<tr>
                <td>${index + 1}</td>
                <td>${student.id}</td>
                <td>
                    <a href="/detail.html?id=${student.id}">
                        ${student.name}
                    </a>
                </td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.start_date}</td>
                <td>${
                  student.status
                    ? '<span class="text-danger">HL</span>'
                    : '<span class="text-primary">HD</span>'
                }
                </td>
                <td>${student.age}</td>
               

            </tr>`;
    })
    .join("");
  content.innerHTML = result;
  
//   var fullName = "Le Trong Dat";
//   var age = 18;
  
//   console.log("Ten toi la " + fullName + ". Toi nam nay " + age + "Tuoi");
//   console.log(`Ten toi la ${fullName}. Toi nam nay ${age} tuoi`);


  const total = data.reduce(function(accumulator, currentValue)
{
  return accumulator + currentValue.age;
},0);
document.querySelector("#total").innerHTML= total;
  