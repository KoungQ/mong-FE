import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container.jsx'

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
      {/* Header */}
      <div style={{ 
        backgroundColor: '#000', 
        borderBottom: '1px solid #2a2a2a',
        height: 65,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ 
            width: 32, 
            height: 32, 
            borderRadius: '50%', 
            backgroundColor: 'rgba(0, 212, 170, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ width: 20, height: 20, backgroundColor: '#00d4aa', borderRadius: 4 }} />
          </div>
          <span style={{ 
            fontFamily: 'Righteous, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            fontSize: 24,
            color: '#fff'
          }}>
            mong
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button style={{ 
            backgroundColor: 'transparent',
            border: 'none',
            color: '#a1a1aa',
            fontSize: 14,
            fontWeight: 500,
            padding: '8px 16px',
            borderRadius: 8,
            cursor: 'pointer'
          }}>
            상세기록
          </button>
          <button style={{ 
            backgroundColor: 'transparent',
            border: 'none',
            color: '#a1a1aa',
            fontSize: 14,
            fontWeight: 500,
            padding: '8px 16px',
            borderRadius: 8,
            cursor: 'pointer'
          }}>
            통계
          </button>
          <button style={{ 
            backgroundColor: 'transparent',
            border: 'none',
            color: '#a1a1aa',
            fontSize: 14,
            fontWeight: 500,
            padding: '8px 16px',
            borderRadius: 8,
            cursor: 'pointer'
          }}>
            AI 인사이트
          </button>
          <div style={{ width: 1, height: 24, backgroundColor: '#2a2a2a' }} />
          <button style={{ 
            backgroundColor: '#00d4aa',
            border: 'none',
            color: '#000',
            fontSize: 14,
            fontWeight: 500,
            padding: '8px 16px',
            borderRadius: 8,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            <div style={{ width: 16, height: 16, backgroundColor: '#000', borderRadius: 2 }} />
            수면 기록 시작
          </button>
          <div style={{ 
            backgroundColor: '#2a2a2a',
            borderRadius: '50%',
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 8
          }}>
            <span style={{ color: '#000', fontSize: 14, fontWeight: 500 }}>김</span>
          </div>
          <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>김수면</span>
          <div style={{ width: 16, height: 16, backgroundColor: '#a1a1aa', borderRadius: 2 }} />
        </div>
      </div>

      <Container>
        <div style={{ padding: '24px 0' }}>
          {/* Statistics Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: 16, 
            marginBottom: 24 
          }}>
            {/* 전체 평균 점수 카드 */}
            <div style={{ 
              backgroundColor: '#1a1a1a', 
              border: '1px solid #2a2a2a', 
              borderRadius: 14, 
              padding: 20,
              position: 'relative'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>전체 평균 점수</span>
                <div style={{ width: 16, height: 16, backgroundColor: '#a1a1aa', borderRadius: 2 }} />
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 4 }}>85점</div>
              <div style={{ fontSize: 12, color: '#a1a1aa' }}>45일 기록</div>
            </div>

            {/* 주간 평균 카드 */}
            <div style={{ 
              backgroundColor: '#1a1a1a', 
              border: '1px solid #2a2a2a', 
              borderRadius: 14, 
              padding: 20,
              position: 'relative'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>주간 평균</span>
                <div style={{ width: 16, height: 16, backgroundColor: '#a1a1aa', borderRadius: 2 }} />
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 4 }}>82점</div>
              <div style={{ fontSize: 12, color: '#a1a1aa' }}>최근 7일 평균</div>
            </div>

            {/* 평균 수면시간 카드 */}
            <div style={{ 
              backgroundColor: '#1a1a1a', 
              border: '1px solid #2a2a2a', 
              borderRadius: 14, 
              padding: 20,
              position: 'relative'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>평균 수면시간</span>
                <div style={{ width: 16, height: 16, backgroundColor: '#a1a1aa', borderRadius: 2 }} />
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 4 }}>7.2h</div>
              <div style={{ fontSize: 12, color: '#a1a1aa' }}>목표: 8시간</div>
            </div>
          </div>

          {/* 수면 패턴 분석 섹션 */}
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            border: '1px solid #2a2a2a', 
            borderRadius: 14, 
            padding: 24,
            marginBottom: 24
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 16, height: 16, backgroundColor: '#a1a1aa', borderRadius: 2 }} />
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: 0 }}>수면 패턴 분석</h3>
              </div>
              <button style={{ 
                backgroundColor: 'rgba(42, 42, 42, 0.3)',
                border: '1px solid #2a2a2a',
                color: '#fff',
                fontSize: 14,
                fontWeight: 500,
                padding: '8px 16px',
                borderRadius: 8,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}>
                <div style={{ width: 16, height: 16, backgroundColor: '#a1a1aa', borderRadius: 2 }} />
                통계 보기
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {/* 수면 시간 추이 차트 */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <div style={{ width: 16, height: 16, backgroundColor: '#a1a1aa', borderRadius: 2 }} />
                  <h4 style={{ fontSize: 16, fontWeight: 500, color: '#fff', margin: 0 }}>수면 시간 추이</h4>
                </div>
                <div style={{ 
                  backgroundColor: '#2a2a2a', 
                  borderRadius: 8, 
                  padding: '16px 8px 8px 8px', 
                  height: 180,
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}>
                  {[5.5, 6.4, 7.3, 8.2, 9, 6.4, 7.3].map((value, index) => (
                    <div key={index} style={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flex: 1,
                      position: 'relative'
                    }}>
                      <div style={{ 
                        backgroundColor: '#00d4aa', 
                        width: 32, 
                        height: `${(value / 9) * 130}px`,
                        borderRadius: 4,
                        minHeight: 20,
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                      }} 
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#00ffb3'
                        e.target.style.transform = 'scale(1.05)'
                        e.target.style.boxShadow = '0 4px 12px rgba(0, 255, 179, 0.3)'
                        const tooltip = e.target.nextSibling
                        if (tooltip) {
                          tooltip.style.display = 'block'
                          // 애니메이션을 위해 다음 프레임에서 실행
                          requestAnimationFrame(() => {
                            tooltip.style.opacity = '1'
                            tooltip.style.transform = 'translateX(-50%) translateY(0)'
                          })
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00d4aa'
                        e.target.style.transform = 'scale(1)'
                        e.target.style.boxShadow = 'none'
                        const tooltip = e.target.nextSibling
                        if (tooltip) {
                          tooltip.style.opacity = '0'
                          tooltip.style.transform = 'translateX(-50%) translateY(-5px)'
                          // 애니메이션 완료 후 숨김
                          setTimeout(() => {
                            tooltip.style.display = 'none'
                          }, 300)
                        }
                      }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '-30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#1a1a1a',
                        color: '#fff',
                        padding: '4px 8px',
                        borderRadius: 4,
                        fontSize: 12,
                        fontWeight: 500,
                        border: '1px solid #2a2a2a',
                        display: 'none',
                        zIndex: 10,
                        whiteSpace: 'nowrap',
                        opacity: 0,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: 'translateX(-50%) translateY(-5px)',
                        pointerEvents: 'none'
                      }}>
                        {value}h
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  marginTop: 8,
                  fontSize: 11,
                  color: '#a1a1aa',
                  padding: '0 4px'
                }}>
                  {['금', '토', '일', '월', '화', '수', '목'].map(day => (
                    <span key={day} style={{ flex: 1, textAlign: 'center' }}>{day}</span>
                  ))}
                </div>
              </div>

              {/* 수면 점수 추이 차트 */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <div style={{ width: 16, height: 16, backgroundColor: '#a1a1aa', borderRadius: 2 }} />
                  <h4 style={{ fontSize: 16, fontWeight: 500, color: '#fff', margin: 0 }}>수면 점수 추이</h4>
                </div>
                <div style={{ 
                  backgroundColor: '#2a2a2a', 
                  borderRadius: 8, 
                  padding: '16px 8px 8px 8px', 
                  height: 180,
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}>
                  {[60, 70, 80, 90, 100, 70, 80].map((value, index) => (
                    <div key={index} style={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flex: 1,
                      position: 'relative'
                    }}>
                      <div style={{ 
                        backgroundColor: '#00d4aa', 
                        width: 32, 
                        height: `${(value / 100) * 130}px`,
                        borderRadius: 4,
                        minHeight: 20,
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                      }} 
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#00ffb3'
                        e.target.style.transform = 'scale(1.05)'
                        e.target.style.boxShadow = '0 4px 12px rgba(0, 255, 179, 0.3)'
                        const tooltip = e.target.nextSibling
                        if (tooltip) {
                          tooltip.style.display = 'block'
                          // 애니메이션을 위해 다음 프레임에서 실행
                          requestAnimationFrame(() => {
                            tooltip.style.opacity = '1'
                            tooltip.style.transform = 'translateX(-50%) translateY(0)'
                          })
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00d4aa'
                        e.target.style.transform = 'scale(1)'
                        e.target.style.boxShadow = 'none'
                        const tooltip = e.target.nextSibling
                        if (tooltip) {
                          tooltip.style.opacity = '0'
                          tooltip.style.transform = 'translateX(-50%) translateY(-5px)'
                          // 애니메이션 완료 후 숨김
                          setTimeout(() => {
                            tooltip.style.display = 'none'
                          }, 300)
                        }
                      }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '-30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#1a1a1a',
                        color: '#fff',
                        padding: '4px 8px',
                        borderRadius: 4,
                        fontSize: 12,
                        fontWeight: 500,
                        border: '1px solid #2a2a2a',
                        display: 'none',
                        zIndex: 10,
                        whiteSpace: 'nowrap',
                        opacity: 0,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: 'translateX(-50%) translateY(-5px)',
                        pointerEvents: 'none'
                      }}>
                        {value}점
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  marginTop: 8,
                  fontSize: 11,
                  color: '#a1a1aa',
                  padding: '0 4px'
                }}>
                  {['금', '토', '일', '월', '화', '수', '목'].map(day => (
                    <span key={day} style={{ flex: 1, textAlign: 'center' }}>{day}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 수면 기록 달력 섹션 */}
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            border: '1px solid #2a2a2a', 
            borderRadius: 14, 
            padding: 24,
            marginBottom: 24
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 20, height: 20, backgroundColor: '#a1a1aa', borderRadius: 2 }} />
                <h3 style={{ fontSize: 16, color: '#fff', margin: 0 }}>수면 기록 달력</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <button style={{ 
                  backgroundColor: 'rgba(42, 42, 42, 0.3)',
                  border: '1px solid #2a2a2a',
                  color: '#fff',
                  width: 38,
                  height: 32,
                  borderRadius: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ width: 16, height: 16, backgroundColor: '#a1a1aa', borderRadius: 2 }} />
                </button>
                <span style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>2024년 9월</span>
                <button style={{ 
                  backgroundColor: 'rgba(42, 42, 42, 0.3)',
                  border: '1px solid #2a2a2a',
                  color: '#fff',
                  width: 38,
                  height: 32,
                  borderRadius: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ width: 16, height: 16, backgroundColor: '#a1a1aa', borderRadius: 2 }} />
                </button>
              </div>
            </div>

            {/* 달력과 상세 정보를 좌우로 배치 */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24, alignItems: 'stretch' }}>
              {/* 달력 그리드 - 왼쪽 (더 넓게) */}
              <div>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(7, 1fr)', 
                  gap: 8,
                  paddingBottom: 16
                }}>
                  {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                    <div key={day} style={{ 
                      textAlign: 'center', 
                      fontSize: 16, 
                      fontWeight: 500, 
                      color: '#a1a1aa',
                      padding: '12px 0',
                      minHeight: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {day}
                    </div>
                  ))}
                </div>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(7, 1fr)', 
                  gap: 8
                }}>
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i + 1;
                    const isCurrentMonth = day <= 30;
                    const isSelected = day === 12;
                    
                    return (
                      <div key={day} style={{ 
                        textAlign: 'center',
                        padding: '12px 0',
                        position: 'relative',
                        cursor: 'pointer',
                        borderRadius: 8,
                        transition: 'all 0.2s ease',
                        minHeight: '48px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={(e) => {
                        if (isCurrentMonth) {
                          e.target.style.backgroundColor = 'rgba(0, 212, 170, 0.1)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent'
                      }}>
                        {isCurrentMonth && (
                          <>
                            <div style={{ 
                              fontSize: 16, 
                              fontWeight: 700, 
                              color: isSelected ? '#000' : '#fff',
                              marginBottom: 4
                            }}>
                              {day}
                            </div>
                            {isSelected && (
                              <div style={{ 
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: '#00d4aa',
                                borderRadius: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: -1
                              }} />
                            )}
                            {day === 12 && (
                              <div style={{ 
                                width: 8, 
                                height: 8, 
                                backgroundColor: '#00c950', 
                                borderRadius: '50%',
                                margin: '0 auto'
                              }} />
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 선택된 날짜 상세 정보 - 오른쪽 (더 좁게, 세로 정렬) */}
              <div style={{ 
                backgroundColor: 'rgba(42, 42, 42, 0.2)',
                border: '1px solid #2a2a2a',
                borderRadius: 10,
                padding: 20,
                paddingTop: 30,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                height: 'fit-content',
                maxHeight: '600px'
              }}>
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12
                }}>
                  <div style={{ 
                    width: 60, 
                    height: 60, 
                    border: '3px solid #22c55e',
                    backgroundColor: 'transparent',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#22c55e',
                    position: 'relative',
                    lineHeight: 1
                  }}>
                    85
                  </div>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}>
                    <div style={{ 
                      backgroundColor: '#22c55e', 
                      color: '#000',
                      padding: '4px 8px',
                      borderRadius: 8,
                      fontSize: 12,
                      fontWeight: 500,
                      display: 'inline-block'
                    }}>
                      좋음
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>9월 12일</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ 
                    backgroundColor: 'rgba(42, 42, 42, 0.3)',
                    border: '1px solid #2a2a2a',
                    borderRadius: 8,
                    padding: '14px 16px'
                  }}>
                    <div style={{ fontSize: 12, color: '#a1a1aa', marginBottom: 8 }}>수면 시간</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>7시간 30분</div>
                  </div>
                  <div style={{ 
                    backgroundColor: 'rgba(42, 42, 42, 0.3)',
                    border: '1px solid #2a2a2a',
                    borderRadius: 8,
                    padding: '12px 16px'
                  }}>
                    <div style={{ fontSize: 12, color: '#a1a1aa', marginBottom: 8 }}>취침 시간</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>23:15</div>
                  </div>
                  <div style={{ 
                    backgroundColor: 'rgba(42, 42, 42, 0.3)',
                    border: '1px solid #2a2a2a',
                    borderRadius: 8,
                    padding: '12px 16px'
                  }}>
                    <div style={{ fontSize: 12, color: '#a1a1aa', marginBottom: 8 }}>기상 시간</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>06:45</div>
                  </div>
                </div>

                <Link 
                  to="/report"
                  style={{ 
                    textDecoration: 'none',
                    display: 'block',
                    width: '100%',
                    marginTop: 16
                  }}
                >
                  <button style={{ 
                    backgroundColor: '#00d4aa',
                    border: 'none',
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 500,
                    padding: '12px 16px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    width: '100%',
                    minHeight: '44px'
                  }}>
                    <div style={{ width: 16, height: 16, backgroundColor: '#000', borderRadius: 2 }} />
                    상세 기록
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 최근 수면 기록 섹션 */}
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            border: '1px solid #2a2a2a', 
            borderRadius: 14, 
            padding: 24
          }}>
            <h3 style={{ fontSize: 16, color: '#fff', margin: '0 0 8px 0' }}>최근 수면 기록</h3>
            <p style={{ fontSize: 16, color: '#a1a1aa', margin: '0 0 24px 0' }}>
              최근 기록들을 한눈에 확인하고 월간 리포트에서 상세 분석을 확인하세요
            </p>
            
            {true ? (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: 16,
              gridTemplateRows: 'repeat(1, 1fr)'
            }}>
                {[
                  { date: '9월 12일', score: 85, sleepTime: '7시간 30분' },
                  { date: '9월 11일', score: 81, sleepTime: '7시간 15분' },
                  { date: '9월 10일', score: 85, sleepTime: '7시간 30분' },
                  { date: '9월 9일', score: 81, sleepTime: '7시간 15분' }
                ].map((record, index) => {
                  const getScoreColor = (score) => {
                    if (score >= 85) return '#22c55e'; // 좋음 - 초록색
                    if (score >= 70) return '#eab308'; // 보통 - 노란색
                    return '#ef4444'; // 나쁨 - 빨간색
                  };
                  const scoreColor = getScoreColor(record.score);
                  return (
                  <div key={index} style={{ 
                    backgroundColor: 'rgba(42, 42, 42, 0.2)',
                    border: '1px solid #2a2a2a',
                    borderRadius: 10,
                    padding: 8,
                    aspectRatio: '1.2',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr 1fr',
                    gap: 8
                  }}>
                    {/* 1분면: 날짜 (좌상) */}
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{record.date}</div>
                    </div>
                    
                    {/* 2분면: 점수 (우상) */}
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      textAlign: 'center'
                    }}>
                      <div style={{ 
                        width: 44, 
                        height: 44, 
                        border: `2px solid ${scoreColor}`,
                        backgroundColor: 'transparent',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 14,
                        fontWeight: 700,
                        color: scoreColor,
                        lineHeight: 1
                      }}>
                        {record.score}
                      </div>
                    </div>
                    
                    {/* 3분면: 수면시간 (좌하) */}
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: 12, color: '#a1a1aa', marginBottom: 4 }}>수면시간</div>
                      <div style={{ fontSize: 13, color: '#fff' }}>{record.sleepTime}</div>
                    </div>
                    
                    {/* 4분면: 수면패턴 (우하) */}
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: 12, color: '#a1a1aa', marginBottom: 4 }}>수면패턴</div>
                      <div style={{ 
                        backgroundColor: '#2a2a2a',
                        color: '#fff',
                        padding: '3px 6px',
                        borderRadius: 6,
                        fontSize: 10,
                        fontWeight: 500,
                        display: 'inline-block'
                      }}>
                        좋음
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            ) : (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px 20px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: 80,
                  height: 80,
                  backgroundColor: 'rgba(42, 42, 42, 0.3)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24
                }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#a1a1aa',
                    borderRadius: 8
                  }} />
                </div>
                <h4 style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#fff',
                  margin: '0 0 8px 0'
                }}>
                  아직 수면 기록이 없습니다
                </h4>
                <p style={{
                  fontSize: 14,
                  color: '#a1a1aa',
                  margin: '0 0 24px 0',
                  lineHeight: 1.5
                }}>
                  수면을 기록하기 시작하면<br />
                  여기에 최근 기록들이 표시됩니다
                </p>
                <button style={{
                  backgroundColor: '#00d4aa',
                  border: 'none',
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 500,
                  padding: '12px 24px',
                  borderRadius: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}>
                  <div style={{ width: 16, height: 16, backgroundColor: '#000', borderRadius: 2 }} />
                  첫 수면 기록하기
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
