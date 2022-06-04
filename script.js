// ----------img--------------
//TẠO NÚT ACTIVE CHUYỂN ĐỔI HÌNH ẢNH
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imgContainer = document.querySelector('.aspect-ratio-169');
const dotItem = document.querySelectorAll(".dot");
let index=0;
let imgNumber = imgPosition.length;

imgPosition.forEach(function(image ,index) {
image.style.left = index*100 + "%";
  dotItem[index].addEventListener("click",function(){
    slider (index)
  })
})

function imgSlide () {
  index++;
  if(index>=imgNumber) {
	index=0;}
  slider (index)
}

function slider (index) {
  imgContainer.style.left = "-" + index*100 + "%";
  const dotActive = document.querySelector('.active')
  dotActive.classList.remove("active")
  dotItem[index].classList.add("active")
}
setInterval(imgSlide , 5000)


// -----------------------Search----------------------
// Close / Open model
var btnOpen = document.querySelector('.open-modal')
var modal = document.querySelector('.modal')
var btnClose = document.querySelector('.close-btn i')

function toggleModel(){
  modal.classList.toggle('hide')
}

btnOpen.addEventListener("click", toggleModel)
btnClose.addEventListener("click", toggleModel)
modal.addEventListener("click", function(e){
  if(e.target == e.currentTarget)
  {
    toggleModel()
  }
})


// ----------------------------------------------------
//Toast

// var btnSuccess = document.querySelector(".control .success");
// var btnWarning = document.querySelector(".control .warning");
// var btnError = document.querySelector(".control .error");

// btnSuccess.addEventListener("click", function () {
//     createToast('success' , 7000)

// });
// btnWarning.addEventListener("click", function () {
//     createToast('warning')

// });
// btnError.addEventListener("click", function () {
//     createToast('error')

// });


// function createToast(status , timeout) {

//   switch (status) {
//     case "success":
//          templateInner = `<i class="fa-solid fa-circle-check"></i>
//             <span class="message">
//                 This is a Success message
//   </span>`
//       break;

//     case "warning":
//          templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
//         <span class="message">
//             This is a Warning message
//         </span>`
//       break;

//     case "error":
//          templateInner = ` <i class="fa-solid fa-triangle-exclamation"></i>
//         <span class="message">
//             This is a Error message
//         </span>`
//       break;
//   }

//   var toast = document.createElement("div");
//   toast.classList.add("toast");
//   toast.classList.add(status);

//   toast.innerHTML = `${templateInner}
//         <span class="countdown"></span>`;

//   var toastList = document.getElementById("toasts");

//   toastList.appendChild(toast);

//   timeout = timeout || 4000;

//   setTimeout(function() {
//       toast.style.animation = 'slide_hide 2s linear forwards';
//   } ,timeout)
//   setTimeout(function() {
//       toast.remove();
//   } ,timeout + 2000)
// }


