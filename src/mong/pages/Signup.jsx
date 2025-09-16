import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container.jsx'

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    verificationCode: '',
    name: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    gender: ''
  })
  
  const [emailVerified, setEmailVerified] = useState(false)
  const [verificationSent, setVerificationSent] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSendVerification = () => {
    if (formData.email) {
      setVerificationSent(true)
      // 실제로는 이메일 인증 API를 호출
      console.log('인증번호 전송:', formData.email)
    }
  }

  const handleVerifyCode = () => {
    if (formData.verificationCode) {
      setEmailVerified(true)
      console.log('인증번호 확인:', formData.verificationCode)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('회원가입 시도:', formData)
    // 여기에 실제 회원가입 로직을 구현할 수 있습니다
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
      <Container width={512}>
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
            회원가입
          </h4>

          <p style={{
            fontSize: 16,
            lineHeight: '24px',
            margin: '0 0 32px 0',
            color: '#a1a1aa',
            textAlign: 'center'
          }}>
            mong과 함께 완벽한 수면 여행을 시작하세요
          </p>

          {/* Signup Form */}
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
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="이메일을 입력하세요"
                  style={{
                    flex: 1,
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
                <button
                  type="button"
                  onClick={handleSendVerification}
                  style={{
                    width: '54px',
                    height: '48px',
                    backgroundColor: 'rgba(0, 201, 80, 0.10)',
                    border: '1px solid rgba(0, 201, 80, 0.20)',
                    borderRadius: 8,
                    color: '#00c950',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(0, 201, 80, 0.20)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(0, 201, 80, 0.10)'}
                >
                  전송
                </button>
              </div>
              {verificationSent && (
                <p style={{
                  color: '#00c950',
                  fontSize: 14,
                  margin: '8px 0 0 0',
                  fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
                }}>
                  {formData.email}로 인증번호를 전송했습니다
                </p>
              )}
            </div>

            {/* Verification Code Field */}
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
                인증번호 (6자리)
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  name="verificationCode"
                  value={formData.verificationCode}
                  onChange={handleInputChange}
                  placeholder="인증번호를 입력하세요"
                  maxLength="6"
                  style={{
                    flex: 1,
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
                    textAlign: 'center',
                    letterSpacing: '1.4px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00d4aa'}
                  onBlur={(e) => e.target.style.borderColor = '#2a2a2a'}
                />
                <button
                  type="button"
                  onClick={handleVerifyCode}
                  style={{
                    width: '54px',
                    height: '48px',
                    backgroundColor: 'rgba(0, 201, 80, 0.10)',
                    border: '1px solid rgba(0, 201, 80, 0.20)',
                    borderRadius: 8,
                    color: '#00c950',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(0, 201, 80, 0.20)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(0, 201, 80, 0.10)'}
                >
                  확인
                </button>
              </div>
              {emailVerified && (
                <p style={{
                  color: '#00c950',
                  fontSize: 14,
                  margin: '8px 0 0 0',
                  fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
                }}>
                  이메일 인증이 완료되었습니다
                </p>
              )}
            </div>

            {/* Name Field */}
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
                이름
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="이름을 입력하세요"
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
              <p style={{
                color: '#a1a1aa',
                fontSize: 14,
                margin: '8px 0 0 0',
                fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
              }}>
                서비스에서 사용할 이름입니다
              </p>
            </div>

            {/* Password Fields */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
              <div style={{ flex: 1 }}>
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
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="비밀번호 입력"
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
              <div style={{ flex: 1 }}>
                <label style={{
                  display: 'block',
                  fontSize: 16,
                  lineHeight: '24px',
                  color: '#ffffff',
                  marginBottom: '8px',
                  fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
                  fontWeight: 500
                }}>
                  비밀번호 확인
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="비밀번호 확인"
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
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>
            </div>

            {/* Birth Date and Gender Fields */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
              <div style={{ flex: 1 }}>
                <label style={{
                  display: 'block',
                  fontSize: 16,
                  lineHeight: '24px',
                  color: '#ffffff',
                  marginBottom: '8px',
                  fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
                  fontWeight: 500
                }}>
                  생년월일
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
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
              <div style={{ flex: 1 }}>
                <label style={{
                  display: 'block',
                  fontSize: 16,
                  lineHeight: '24px',
                  color: '#ffffff',
                  marginBottom: '8px',
                  fontFamily: 'Apple SD Gothic Neo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
                  fontWeight: 500
                }}>
                  성별
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
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
                >
                  <option value="" style={{ backgroundColor: '#1a1a1a', color: '#a1a1aa' }}>성별을 선택하세요</option>
                  <option value="male" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>남자</option>
                  <option value="female" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>여자</option>
                </select>
              </div>
            </div>

            {/* Signup Button */}
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
                marginBottom: '24px'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#00c4a0'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#00d4aa'}
            >
              mong과 함께 시작하기
            </button>

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
                이미 계정이 있으신가요?{' '}
              </span>
              <Link
                to="/login"
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
                로그인
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}
