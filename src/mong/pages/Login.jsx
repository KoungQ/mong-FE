import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { email, password })
    // 여기에 실제 로그인 로직을 구현할 수 있습니다
  }

  return (
    <div style={{ 
      backgroundColor: '#000', 
      minHeight: '100vh', 
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Container width={448}>
        <div style={{
          backgroundColor: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: 14,
          padding: '32px',
          width: '100%'
        }}>
          {/* Back to Home Link */}
          <div style={{ marginBottom: '24px' }}>
            <Link 
              to="/" 
              style={{ 
                color: '#a1a1aa', 
                textDecoration: 'none', 
                fontSize: '14px',
                fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
              }}
              onMouseOver={(e) => e.target.style.color = '#00d4aa'}
              onMouseOut={(e) => e.target.style.color = '#a1a1aa'}
            >
              ← 홈으로 돌아가기
            </Link>
          </div>

          {/* Overlay Icon */}
          <div style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 212, 170, 0.10)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px auto'
          }}>
            <div style={{
              width: 32,
              height: 32,
              backgroundColor: '#00d4aa',
              borderRadius: 8
            }} />
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 30,
            lineHeight: '36px',
            margin: '0 0 8px 0',
            fontFamily: 'Righteous, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            textAlign: 'center',
            color: '#ffffff'
          }}>
            mong
          </h1>

          <h4 style={{
            fontSize: 24,
            lineHeight: '32px',
            margin: '0 0 16px 0',
            fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            textAlign: 'center',
            color: '#ffffff'
          }}>
            로그인
          </h4>

          <p style={{
            fontSize: 16,
            lineHeight: '24px',
            margin: '0 0 32px 0',
            color: '#a1a1aa',
            textAlign: 'center'
          }}>
            계정에 로그인하여 수면 여행을 계속하세요
          </p>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: 16,
                lineHeight: '24px',
                color: '#ffffff',
                marginBottom: '8px',
                fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 500
              }}>
                이메일
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
                style={{
                  width: '100%',
                  height: '48px',
                  backgroundColor: 'rgba(42, 42, 42, 0.30)',
                  border: '1px solid #2a2a2a',
                  borderRadius: 8,
                  padding: '0 16px',
                  fontSize: 14,
                  color: '#ffffff',
                  fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00d4aa'}
                onBlur={(e) => e.target.style.borderColor = '#2a2a2a'}
              />
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: 16,
                lineHeight: '24px',
                color: '#ffffff',
                marginBottom: '8px',
                fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 500
              }}>
                비밀번호
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  style={{
                    width: '100%',
                    height: '48px',
                    backgroundColor: 'rgba(42, 42, 42, 0.30)',
                    border: '1px solid #2a2a2a',
                    borderRadius: 8,
                    padding: '0 16px',
                    fontSize: 14,
                    color: '#ffffff',
                    fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
                    outline: 'none',
                    boxSizing: 'border-box',
                    paddingRight: '48px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00d4aa'}
                  onBlur={(e) => e.target.style.borderColor = '#2a2a2a'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#a1a1aa',
                    cursor: 'pointer',
                    fontSize: '16px',
                    width: '16px',
                    height: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                height: '48px',
                backgroundColor: '#00d4aa',
                color: '#000000',
                border: 'none',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 500,
                fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
                cursor: 'pointer',
                marginBottom: '20px'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#00c4a0'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#00d4aa'}
            >
              로그인
            </button>

            {/* Forgot Password Link */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <a
                href="#forgot-password"
                style={{
                  color: '#00d4aa',
                  fontSize: 16,
                  textDecoration: 'none',
                  fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
                }}
                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
              >
                비밀번호를 잊으셨나요?
              </a>
            </div>

            {/* Divider */}
            <div style={{
              borderTop: '1px solid #2a2a2a',
              paddingTop: '24px',
              textAlign: 'center'
            }}>
              <span style={{
                color: '#a1a1aa',
                fontSize: 16,
                fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
              }}>
                아직 계정이 없으신가요?{' '}
              </span>
              <Link
                to="/signup"
                style={{
                  color: '#00d4aa',
                  fontSize: 16,
                  fontWeight: 500,
                  textDecoration: 'none',
                  fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
                }}
                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
              >
                회원가입
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}
