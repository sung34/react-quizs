import React from 'react'
import { useState } from 'react'

function Register() {
    const [userInput, setUserInput] = useState({
        email: '',
        pw: '',
        pwConfirm: '',
        name: '',
        username: '',
        phone: '',
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUserInput({ ...userInput, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const newUser = {}
        for (let [key, value] of formData.entries()) {
            newUser[key] = value
        }
        alert(JSON.stringify(newUser, null, 2).replace(/\\n/g, '\n'))
    }
    return (
        <form onSubmit={handleSubmit}>
            <section onChange={handleInputChange}>
                <label htmlFor="email">이메일</label>
                <input name="email" type="email" />
                <label htmlFor="pw">비밀번호</label>
                <input name="pw" type="password" />
                <label htmlFor="pwConfirm">비밀번호 확인</label>
                <input name="pwConfirm" type="password" />
                <label htmlFor="name">이름</label>
                <input name="name" />
                <label htmlFor="username">닉네임</label>
                <input name="username" />
                <label htmlFor="phone">휴대폰 번호</label>
                <input name="phone" />
            </section>

            <button type="submit">가입하기</button>
        </form>
    )
}

export default Register
