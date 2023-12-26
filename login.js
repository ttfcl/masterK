let id = document.querySelector("#id")
let pw = document.querySelector("#pw")
let login = document.querySelector("#login")

login.onclick = () => {
    if(id.value === 'admin' && pw.value === 'qwer1234') {
        localStorage.setItem('masterKB', 'pass')
        alert("관리자 모드에 오신 것을 환영합니다.")
        location.href="change.html"
    }else {
        alert("아이디 또는 비밀번호가 틀렸습니다.")
    }
}