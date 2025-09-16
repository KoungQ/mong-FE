import React, { useState } from 'react';
import Container from '../components/Container.jsx';

const Report = () => {
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [displayMonth, setDisplayMonth] = useState(new Date());
  const [brainwaveData, setBrainwaveData] = useState([]);

  const toggleCalendar = () => {
    setIsCalendarExpanded(!isCalendarExpanded);
  };

  // 표시할 월의 첫 번째 날과 마지막 날
  const year = displayMonth.getFullYear();
  const month = displayMonth.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const firstDayOfWeek = firstDay.getDay(); // 0 = 일요일
  
  // 필요한 주 수 계산 (이전 달 날짜 + 현재 달 + 다음 달 날짜)
  const totalDays = 42; // 6주 * 7일
  const weeksNeeded = Math.ceil((firstDayOfWeek + daysInMonth) / 7);
  const calendarHeight = weeksNeeded * 60 + 100; // 주당 60px + 헤더 100px

  // 데이터가 있는 날짜들 (실제로는 API에서 가져올 데이터)
  // 일부 날짜만 데이터가 있다고 가정
  const availableDates = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
  
  // 수면 레벨 데이터 (실제로는 API에서 가져올 데이터)
  // 데이터가 있는 날짜만 포함
  const sleepLevelData = {
    1: 'good',       // 좋음 - 초록색
    3: 'excellent',  // 매우 좋음 - 파란색
    5: 'poor',       // 나쁨 - 주황색
    7: 'fair',       // 보통 - 노란색
    9: 'good',       // 좋음 - 초록색
    11: 'excellent', // 매우 좋음 - 파란색
    13: 'poor',      // 나쁨 - 주황색
    15: 'good',      // 좋음 - 초록색
    17: 'fair',      // 보통 - 노란색
    19: 'excellent', // 매우 좋음 - 파란색
    21: 'good',      // 좋음 - 초록색
    23: 'poor',      // 나쁨 - 주황색
    25: 'fair',      // 보통 - 노란색
    27: 'excellent', // 매우 좋음 - 파란색
    29: 'good',      // 좋음 - 초록색
    31: 'poor'       // 나쁨 - 주황색
  };
  
  // 수면 레벨별 색상
  const getSleepLevelColor = (level) => {
    switch(level) {
      case 'excellent': return '#3b82f6'; // 파란색
      case 'good': return '#10b981';      // 초록색
      case 'fair': return '#f59e0b';      // 노란색
      case 'poor': return '#f97316';      // 주황색
      default: return '#6b7280';          // 회색
    }
  };

  // 뇌파 데이터를 15분 청크로 그룹화하는 함수
  const processBrainwaveData = (data, sleepStartTime, sleepEndTime) => {
    const chunkMinutes = 15;
    const totalSleepMinutes = Math.ceil((sleepEndTime - sleepStartTime) / (1000 * 60));
    const totalChunks = Math.ceil(totalSleepMinutes / chunkMinutes);
    
    const chunks = [];
    for (let i = 0; i < totalChunks; i++) {
      const startTime = sleepStartTime + (i * chunkMinutes * 60000);
      const endTime = startTime + (chunkMinutes * 60000);
      
      const chunkData = data.filter(item => 
        item.timestamp >= startTime && item.timestamp < endTime
      );
      
      if (chunkData.length > 0) {
        // 각 청크의 가장 빈번한 stage 찾기
        const stageCount = chunkData.reduce((acc, item) => {
          acc[item.stage] = (acc[item.stage] || 0) + 1;
          return acc;
        }, {});
        
        const mostFrequentStage = Object.keys(stageCount).reduce((a, b) => 
          stageCount[a] > stageCount[b] ? a : b
        );
        
        const stageValue = mostFrequentStage === 'A' ? 1 : 
                          mostFrequentStage === 'B' ? 2 : 
                          mostFrequentStage === 'C' ? 3 : 
                          mostFrequentStage === 'D' ? 4 : 5;
        
        chunks.push({
          stage: mostFrequentStage,
          stageValue: stageValue,
          startTime: startTime,
          endTime: endTime
        });
      } else {
        chunks.push({ 
          stage: 'A', 
          stageValue: 1, 
          startTime: startTime, 
          endTime: endTime 
        });
      }
    }
    
    return chunks;
  };

  const handleDateClick = (date, isCurrentMonth, originalDay = null) => {
    if (isCurrentMonth && availableDates.includes(date)) {
      setSelectedDate(date);
      // 날짜 선택 시 달력 접지 않음
    } else if (!isCurrentMonth) {
      // 이전/다음 달 날짜 클릭 시 해당 달로 이동
      const day = originalDay !== null ? originalDay : date;
      if (day < 1) {
        // 이전 달 날짜 (예: 9월 달력에서 31일 클릭 시 8월 31일)
        const prevMonth = new Date(year, month - 1, 0);
        const prevMonthDay = prevMonth.getDate() + day;
        setDisplayMonth(new Date(year, month - 1, 1));
        setSelectedDate(prevMonthDay);
      } else {
        // 다음 달 날짜 (예: 9월 달력에서 1일 클릭 시 10월 1일)
        const nextMonthDay = day - daysInMonth;
        setDisplayMonth(new Date(year, month + 1, 1));
        setSelectedDate(nextMonthDay);
      }
      // 다른 달로 이동 시에도 달력 접지 않음
    }
  };

  const goToPreviousMonth = () => {
    setDisplayMonth(new Date(year, month - 1, 1));
    setSelectedDate(1); // 이전 달의 1일로 설정
  };

  const goToNextMonth = () => {
    setDisplayMonth(new Date(year, month + 1, 1));
    setSelectedDate(1); // 다음 달의 1일로 설정
  };

  // 월 이름 배열
  const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  // 선택된 날짜가 속한 주의 시작일과 끝일 계산
  const selectedDateObj = new Date(year, month, selectedDate);
  const dayOfWeek = selectedDateObj.getDay(); // 0 = 일요일
  const weekStart = selectedDate - dayOfWeek; // 해당 주의 시작일
  
  // 주간 날짜들 (다른 월의 날짜도 포함)
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = weekStart + i;
    const dateObj = new Date(year, month, date);
    return {
      day: dateObj.getDate(),
      month: dateObj.getMonth(),
      year: dateObj.getFullYear(),
      isCurrentMonth: dateObj.getMonth() === month
    };
  });

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000', 
      color: '#fff',
      padding: '20px 0'
    }}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <Container>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {/* 주간 달력 */}
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            border: '1px solid #2a2a2a', 
            borderRadius: 14, 
            padding: 20,
            marginBottom: 24,
            position: 'relative',
            minHeight: isCalendarExpanded ? `${calendarHeight}px` : '140px',
            transition: 'min-height 0.3s ease-in-out',
            overflow: 'hidden'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              marginBottom: 16
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <button 
                  onClick={goToPreviousMonth}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 8,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ 
                    width: 12, 
                    height: 12, 
                    backgroundColor: 'transparent',
                    borderLeft: '1.5px solid #a1a1aa',
                    borderBottom: '1.5px solid #a1a1aa',
                    transform: 'rotate(45deg)'
                  }} />
                </button>
                <h2 style={{ 
                  fontSize: 18, 
                  fontWeight: 700, 
                  color: '#fff', 
                  margin: 0 
                }}>
                  {year}년 {monthNames[month]} {selectedDate}일
                </h2>
                <button 
                  onClick={goToNextMonth}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 8,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ 
                    width: 12, 
                    height: 12, 
                    backgroundColor: 'transparent',
                    borderRight: '1.5px solid #a1a1aa',
                    borderBottom: '1.5px solid #a1a1aa',
                    transform: 'rotate(-45deg)'
                  }} />
                </button>
              </div>
              <button 
                onClick={toggleCalendar}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#a1a1aa',
                  cursor: 'pointer',
                  padding: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ 
                  width: 12, 
                  height: 12, 
                  backgroundColor: 'transparent',
                  borderRight: '1.5px solid #a1a1aa',
                  borderBottom: '1.5px solid #a1a1aa',
                  transform: isCalendarExpanded ? 'rotate(45deg)' : 'rotate(-135deg)',
                  transition: 'transform 0.4s ease'
                }} />
              </button>
            </div>

            {/* 요일 헤더 - 항상 표시 */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(7, 1fr)', 
              gap: 8,
              paddingBottom: 4,
              borderBottom: '1px solid #2a2a2a',
              marginBottom: 12
            }}>
              {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                <div key={day} style={{ 
                  textAlign: 'center', 
                  fontSize: 14, 
                  fontWeight: 500, 
                  color: '#a1a1aa',
                  padding: '8px 0 4px 0',
                  minHeight: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {day}
                </div>
              ))}
            </div>

            {/* 주간 날짜 그리드 - 접힌 상태 */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(7, 1fr)', 
              gap: 8,
              opacity: isCalendarExpanded ? 0 : 1,
              transform: isCalendarExpanded ? 'translateY(-20px) scale(0.8)' : 'translateY(0) scale(1)',
              transition: isCalendarExpanded ? 'opacity 0s, transform 0s' : 'opacity 0.4s ease, transform 0.4s ease',
              pointerEvents: isCalendarExpanded ? 'none' : 'auto',
              position: isCalendarExpanded ? 'absolute' : 'relative',
              width: '100%',
              paddingTop: 0
            }}>
              {weekDates.map((dateInfo, index) => {
                const isSelected = dateInfo.day === selectedDate && dateInfo.isCurrentMonth;
                const isAvailable = dateInfo.isCurrentMonth && availableDates.includes(dateInfo.day);
                const hasData = dateInfo.isCurrentMonth && sleepLevelData[dateInfo.day];
                
                return (
                  <div key={index} style={{ 
                    textAlign: 'center',
                    padding: '12px 0',
                    position: 'relative',
                    cursor: isAvailable ? 'pointer' : 'default',
                    borderRadius: 8,
                    transition: 'all 0.2s ease',
                    minHeight: '48px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: dateInfo.isCurrentMonth ? (isAvailable ? 1 : 0.3) : 0.3
                  }}
                  onClick={() => handleDateClick(dateInfo.day, dateInfo.isCurrentMonth)}
                  onMouseEnter={(e) => {
                    if (isAvailable) {
                      e.target.style.backgroundColor = 'rgba(0, 212, 170, 0.1)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                  }}>
                    <div style={{ 
                      fontSize: 16, 
                      fontWeight: 700, 
                      color: isSelected ? '#000' : '#fff',
                      marginBottom: 4
                    }}>
                      {dateInfo.day}
                    </div>
                    {hasData && (
                      <div style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: getSleepLevelColor(sleepLevelData[dateInfo.day]),
                        marginTop: 2
                      }} />
                    )}
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
                  </div>
                );
              })}
            </div>

            {/* 월간 날짜 그리드 - 펼친 상태 */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(7, 1fr)', 
              gap: 8,
              opacity: isCalendarExpanded ? 1 : 0,
              transform: isCalendarExpanded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
              transition: isCalendarExpanded ? 'opacity 0.4s ease, transform 0.4s ease' : 'opacity 0s, transform 0s',
              pointerEvents: isCalendarExpanded ? 'auto' : 'none',
              position: isCalendarExpanded ? 'relative' : 'absolute',
              width: '100%',
              top: 0,
              left: 0,
              paddingTop: 0
            }}>
              {Array.from({ length: weeksNeeded * 7 }, (_, i) => {
                const day = i - firstDayOfWeek + 1;
                const isCurrentMonth = day >= 1 && day <= daysInMonth;
                const isSelected = day === selectedDate;
                const isAvailable = isCurrentMonth && availableDates.includes(day);
                const hasData = isCurrentMonth && sleepLevelData[day];
                
                // 이전 달 날짜 계산
                let displayDay = day;
                if (day < 1) {
                  const prevMonth = new Date(year, month - 1, 0);
                  displayDay = prevMonth.getDate() + day;
                } else if (day > daysInMonth) {
                  displayDay = day - daysInMonth;
                }
                
                return (
                  <div key={i} style={{ 
                    textAlign: 'center',
                    padding: '12px 0',
                    position: 'relative',
                    cursor: isAvailable ? 'pointer' : 'default',
                    borderRadius: 8,
                    transition: 'all 0.2s ease',
                    minHeight: '48px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: isCurrentMonth ? (isAvailable ? 1 : 0.3) : 0.3
                  }}
                  onClick={() => handleDateClick(displayDay, isCurrentMonth, day)}
                  onMouseEnter={(e) => {
                    if (isAvailable) {
                      e.target.style.backgroundColor = 'rgba(0, 212, 170, 0.1)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                  }}>
                    <div style={{ 
                      fontSize: 16, 
                      fontWeight: 700, 
                      color: isSelected ? '#000' : (isCurrentMonth ? '#fff' : '#666'),
                      marginBottom: 4
                    }}>
                      {displayDay}
                    </div>
                    {hasData && (
                      <div style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: getSleepLevelColor(sleepLevelData[day]),
                        marginTop: 2
                      }} />
                    )}
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* 메인 컨텐츠 그리드 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: 24,
            marginBottom: 24
          }}>
            {/* 수면 점수 카드 */}
            <div style={{ 
              backgroundColor: '#1a1a1a', 
              border: '1px solid #00d4aa', 
              borderRadius: 14, 
              padding: 24,
              textAlign: 'center'
            }}>
              <div style={{
                width: 96,
                height: 96,
                backgroundColor: 'rgba(0, 212, 170, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                border: '2px solid #00d4aa'
              }}>
                <div style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: '#00d4aa'
                }}>
                  85
                </div>
              </div>
              <h2 style={{ 
                fontSize: 20, 
                fontWeight: 600, 
                color: '#fff', 
                margin: '0 0 8px 0' 
              }}>
                수면 점수
              </h2>
              <p style={{ 
                fontSize: 14, 
                color: '#a1a1aa', 
                margin: '0 0 16px 0' 
              }}>
                전체 평균보다 높은 점수입니다
              </p>
              <div style={{ 
                backgroundColor: '#00d4aa', 
                color: '#000',
                padding: '8px 16px',
                borderRadius: 8,
                fontSize: 18,
                fontWeight: 500,
                display: 'inline-block'
              }}>
                좋음
              </div>
            </div>

            {/* 수면 단계별 비율 카드 */}
            <div style={{ 
              backgroundColor: '#1a1a1a', 
              border: '1px solid #2a2a2a', 
              borderRadius: 14, 
              padding: 24
            }}>
              <h3 style={{ 
                fontSize: 16, 
                fontWeight: 700, 
                color: '#fff', 
                margin: '0 0 8px 0' 
              }}>
                수면 단계별 비율
              </h3>
              <p style={{ 
                fontSize: 16, 
                color: '#a1a1aa', 
                margin: '0 0 24px 0' 
              }}>
                각 수면 단계별 비율 분석
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 16 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 64,
                    height: 64,
                    backgroundColor: 'rgba(43, 127, 255, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 8px',
                    border: '2px solid #2b7fff'
                  }}>
                    <span style={{ fontSize: 18, fontWeight: 700, color: '#2b7fff' }}>30%</span>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 4 }}>깊은 수면</div>
                  <div style={{ fontSize: 14, color: '#a1a1aa' }}>이상적</div>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 64,
                    height: 64,
                    backgroundColor: 'rgba(0, 201, 80, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 8px',
                    border: '2px solid #00c950'
                  }}>
                    <span style={{ fontSize: 18, fontWeight: 700, color: '#00c950' }}>50%</span>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 4 }}>얕은 수면</div>
                  <div style={{ fontSize: 14, color: '#a1a1aa' }}>양호</div>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 64,
                    height: 64,
                    backgroundColor: 'rgba(173, 70, 255, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 8px',
                    border: '2px solid #ad46ff'
                  }}>
                    <span style={{ fontSize: 18, fontWeight: 700, color: '#ad46ff' }}>20%</span>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 4 }}>REM 수면</div>
                  <div style={{ fontSize: 14, color: '#a1a1aa' }}>정상</div>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 그리드 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: 24,
            marginBottom: 24
          }}>
            {/* 수면 단계별 시간 카드 */}
            <div style={{ 
              backgroundColor: '#1a1a1a', 
              border: '1px solid #2a2a2a', 
              borderRadius: 14, 
              padding: 24
            }}>
              <h3 style={{ 
                fontSize: 16, 
                fontWeight: 700, 
                color: '#fff', 
                margin: '0 0 8px 0' 
              }}>
                수면 단계별 시간
              </h3>
              <p style={{ 
                fontSize: 16, 
                color: '#a1a1aa', 
                margin: '0 0 20px 0' 
              }}>
                각 수면 단계별 상세 시간
              </p>
              
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 14, color: '#fff' }}>깊은 수면</span>
                  <span style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>2시간 15분</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 14, color: '#fff' }}>얕은 수면</span>
                  <span style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>3시간 45분</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 14, color: '#fff' }}>REM 수면</span>
                  <span style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>1시간 30분</span>
                </div>
              </div>
              
              <div style={{ 
                borderTop: '1px solid #2a2a2a', 
                paddingTop: 16,
                display: 'flex', 
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>수면 효율</span>
                <span style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>89%</span>
              </div>
            </div>

            {/* 수면 시간 정보 카드 */}
            <div style={{ 
              backgroundColor: '#1a1a1a', 
              border: '1px solid #2a2a2a', 
              borderRadius: 14, 
              padding: 24
            }}>
              <h3 style={{ 
                fontSize: 16, 
                fontWeight: 700, 
                color: '#fff', 
                margin: '0 0 20px 0' 
              }}>
                수면 시간 정보
              </h3>
              
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 14, color: '#fff' }}>취침 시간</span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>23:15</div>
                    <div style={{ fontSize: 12, color: '#a1a1aa' }}>목표보다 15분 늦음</div>
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 14, color: '#fff' }}>총 수면 시간</span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>7시간 30분</div>
                    <div style={{ fontSize: 12, color: '#a1a1aa' }}>목표 대비 -30분</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, color: '#fff' }}>기상 시간</span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>06:45</div>
                    <div style={{ fontSize: 12, color: '#a1a1aa' }}>알람 시간과 동일</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI 분석 리포트 */}
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            border: '1px solid #2a2a2a', 
            borderRadius: 14, 
            padding: 24,
            marginBottom: 24
          }}>
            <h3 style={{ 
              fontSize: 16, 
              fontWeight: 700, 
              color: '#fff', 
              margin: '0 0 8px 0' 
            }}>
              AI 분석 리포트
            </h3>
            <p style={{ 
              fontSize: 16, 
              color: '#a1a1aa', 
              margin: '0 0 16px 0' 
            }}>
              수면 메모를 바탕으로 한 개인화된 분석
            </p>
            <p style={{ 
              fontSize: 14, 
              color: '#fff', 
              margin: '0 0 20px 0',
              lineHeight: 1.6
            }}>
              조용한 환경에서 양질의 수면을 취했습니다. 깊은 수면 비율이 이상적입니다.
            </p>
            
            <div style={{ 
              backgroundColor: 'rgba(42, 42, 42, 0.5)', 
              borderRadius: 10, 
              padding: 20 
            }}>
              <h4 style={{ 
                fontSize: 14, 
                fontWeight: 500, 
                color: '#fff', 
                margin: '0 0 16px 0' 
              }}>
                💡 개선 제안
              </h4>
              <ul style={{ 
                margin: 0, 
                paddingLeft: 20, 
                color: '#a1a1aa',
                fontSize: 14,
                lineHeight: 1.6
              }}>
                <li style={{ marginBottom: 8 }}>취침 시간을 15분 앞당겨 목표 수면시간을 달성해보세요</li>
                <li style={{ marginBottom: 8 }}>현재 깊은 수면 비율이 이상적입니다. 이 패턴을 유지해보세요</li>
                <li style={{ marginBottom: 8 }}>스트레스 관리를 위한 취침 전 명상이나 독서를 추천드립니다 (수면 메모 반영)</li>
                <li>수면 환경이 매우 좋습니다. 현재 설정을 계속 사용하세요</li>
              </ul>
            </div>
          </div>

          {/* 뇌파 & 소음 분석 */}
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            border: '1px solid #2a2a2a', 
            borderRadius: 14, 
            padding: 24,
            marginBottom: 24
          }}>
            <h3 style={{ 
              fontSize: 16, 
              fontWeight: 700, 
              color: '#fff', 
              margin: '0 0 8px 0' 
            }}>
              뇌파 & 소음 분석
            </h3>
            <p style={{ 
              fontSize: 16, 
              color: '#a1a1aa', 
              margin: '0 0 20px 0' 
            }}>
              수면 중 뇌파 등급(A~E)과 소음 이벤트
            </p>
            
            {/* 뇌파 등급 차트 */}
            <div style={{ 
              backgroundColor: 'rgba(42, 42, 42, 0.3)', 
              borderRadius: 8, 
              padding: 20,
              marginBottom: 16,
              height: 200,
              position: 'relative'
            }}>
              {/* Y축 라벨 */}
              <div style={{
                position: 'absolute',
                left: 10,
                top: 20,
                fontSize: 12,
                color: '#fff',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed'
              }}>
                뇌파 등급
              </div>
              
              {/* Y축 등급 라벨 */}
              {['A', 'B', 'C', 'D', 'E'].map((grade, index) => (
                <div key={grade} style={{
                  position: 'absolute',
                  left: 30,
                  top: 40 + (index * 32),
                  fontSize: 12,
                  color: '#fff',
                  fontWeight: 500
                }}>
                  {grade}
                </div>
              ))}
              
              {/* 시간 라벨 */}
              <div style={{
                position: 'absolute',
                bottom: 10,
                left: 60,
                right: 20,
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                {['23:15', '23:45', '00:30', '01:00', '02:00', '03:15', '04:30', '05:45', '06:30', '06:45'].map((time, index) => (
                  <div key={time} style={{
                    fontSize: 10,
                    color: '#666',
                    textAlign: 'center',
                    width: '10%'
                  }}>
                    {time}
                  </div>
                ))}
              </div>
              
              {/* 뇌파 등급 막대 차트 */}
              <div style={{
                position: 'absolute',
                left: 60,
                right: 20,
                top: 40,
                bottom: 30,
                display: 'flex',
                alignItems: 'flex-end',
                overflow: 'hidden',
                width: 'calc(100% - 80px)'
              }}>
                {/* 뇌파 등급 데이터 (30초마다 데이터, 15분 청크로 그룹화) */}
                {(() => {
                  // 샘플 데이터 생성 (실제로는 API에서 받아올 데이터)
                  const sleepStartTime = new Date('2024-01-01T23:15:00').getTime();
                  const sleepEndTime = new Date('2024-01-02T06:45:00').getTime();
                  
                  // 샘플 뇌파 데이터 (30초마다)
                  const sampleBrainwaveData = [
                    // 23:15-23:30 (15분) - A등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (i * 30000), 
                      stage: 'A' 
                    })),
                    // 23:30-23:45 (15분) - A등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (15 * 60000) + (i * 30000), 
                      stage: 'A' 
                    })),
                    // 23:45-00:00 (15분) - B등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (30 * 60000) + (i * 30000), 
                      stage: 'B' 
                    })),
                    // 00:00-00:15 (15분) - B등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (45 * 60000) + (i * 30000), 
                      stage: 'B' 
                    })),
                    // 00:15-00:30 (15분) - B등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (60 * 60000) + (i * 30000), 
                      stage: 'B' 
                    })),
                    // 00:30-00:45 (15분) - C등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (75 * 60000) + (i * 30000), 
                      stage: 'C' 
                    })),
                    // 00:45-01:00 (15분) - C등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (90 * 60000) + (i * 30000), 
                      stage: 'C' 
                    })),
                    // 01:00-01:15 (15분) - D등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (105 * 60000) + (i * 30000), 
                      stage: 'D' 
                    })),
                    // 01:15-01:30 (15분) - D등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (120 * 60000) + (i * 30000), 
                      stage: 'D' 
                    })),
                    // 01:30-01:45 (15분) - D등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (135 * 60000) + (i * 30000), 
                      stage: 'D' 
                    })),
                    // 01:45-02:00 (15분) - D등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (150 * 60000) + (i * 30000), 
                      stage: 'D' 
                    })),
                    // 02:00-02:15 (15분) - C등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (165 * 60000) + (i * 30000), 
                      stage: 'C' 
                    })),
                    // 02:15-02:30 (15분) - C등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (180 * 60000) + (i * 30000), 
                      stage: 'C' 
                    })),
                    // 02:30-02:45 (15분) - C등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (195 * 60000) + (i * 30000), 
                      stage: 'C' 
                    })),
                    // 02:45-03:00 (15분) - C등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (210 * 60000) + (i * 30000), 
                      stage: 'C' 
                    })),
                    // 03:00-03:15 (15분) - C등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (225 * 60000) + (i * 30000), 
                      stage: 'C' 
                    })),
                    // 03:15-03:30 (15분) - A등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (240 * 60000) + (i * 30000), 
                      stage: 'A' 
                    })),
                    // 03:30-03:45 (15분) - A등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (255 * 60000) + (i * 30000), 
                      stage: 'A' 
                    })),
                    // 03:45-04:00 (15분) - A등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (270 * 60000) + (i * 30000), 
                      stage: 'A' 
                    })),
                    // 04:00-04:15 (15분) - A등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (285 * 60000) + (i * 30000), 
                      stage: 'A' 
                    })),
                    // 04:15-04:30 (15분) - A등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (300 * 60000) + (i * 30000), 
                      stage: 'A' 
                    })),
                    // 04:30-04:45 (15분) - D등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (315 * 60000) + (i * 30000), 
                      stage: 'D' 
                    })),
                    // 04:45-05:00 (15분) - D등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (330 * 60000) + (i * 30000), 
                      stage: 'D' 
                    })),
                    // 05:00-05:15 (15분) - D등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (345 * 60000) + (i * 30000), 
                      stage: 'D' 
                    })),
                    // 05:15-05:30 (15분) - D등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (360 * 60000) + (i * 30000), 
                      stage: 'D' 
                    })),
                    // 05:30-05:45 (15분) - D등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (375 * 60000) + (i * 30000), 
                      stage: 'D' 
                    })),
                    // 05:45-06:00 (15분) - C등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (390 * 60000) + (i * 30000), 
                      stage: 'C' 
                    })),
                    // 06:00-06:15 (15분) - C등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (405 * 60000) + (i * 30000), 
                      stage: 'C' 
                    })),
                    // 06:15-06:30 (15분) - C등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (420 * 60000) + (i * 30000), 
                      stage: 'C' 
                    })),
                    // 06:30-06:45 (15분) - A등급
                    ...Array.from({ length: 30 }, (_, i) => ({ 
                      timestamp: sleepStartTime + (435 * 60000) + (i * 30000), 
                      stage: 'A' 
                    }))
                  ];
                  
                  // 15분 청크로 그룹화
                  const chunks = processBrainwaveData(sampleBrainwaveData, sleepStartTime, sleepEndTime);
                  
                  return chunks.map((chunk, index) => (
                    <div key={index} style={{
                      height: `${(chunk.stageValue / 5) * 100}%`,
                      width: `${(15 / 450) * 100}%`, // 15분 / 450분
                      background: `linear-gradient(180deg, #193cb8 0%, #51a2ff 100%)`,
                      marginRight: index === chunks.length - 1 ? '0' : '1px',
                      borderRadius: '2px 2px 0 0',
                      flexShrink: 0
                    }} />
                  ));
                })()}
              </div>
            </div>
            
            {/* 뇌파 등급 범례 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 32,
                height: 12,
                background: 'linear-gradient(90deg, #193cb8 0%, #51a2ff 100%)',
                borderRadius: 6
              }} />
              <span style={{ fontSize: 14, color: '#fff' }}>
                뇌파 등급 (A: 깊은 수면 → E: 각성)
              </span>
            </div>
            
            {/* 감지된 소음 이벤트 */}
            <div style={{
              backgroundColor: 'rgba(42, 42, 42, 0.5)',
              borderRadius: 8,
              padding: 16,
              border: '1px solid #2a2a2a'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 16
              }}>
                <h4 style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#fff',
                  margin: 0
                }}>
                  감지된 소음 이벤트
                </h4>
                <div style={{
                  width: 16,
                  height: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a1a1aa'
                }}>
                  ▼
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* 코골이 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 24,
                    height: 24,
                    backgroundColor: '#00d4aa',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12
                  }}>
                    😴
                  </div>
                  <span style={{ fontSize: 14, color: '#fff' }}>코골이</span>
                </div>
                
                {/* 외부 소음 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 24,
                    height: 24,
                    backgroundColor: '#00d4aa',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12
                  }}>
                    🚗
                  </div>
                  <span style={{ fontSize: 14, color: '#fff' }}>외부 소음</span>
                </div>
                
                {/* 에어컨 소음 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 24,
                    height: 24,
                    backgroundColor: '#00d4aa',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12
                  }}>
                    ❄️
                  </div>
                  <span style={{ fontSize: 14, color: '#fff' }}>에어컨 소음</span>
                </div>
                
                {/* 소음 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 24,
                    height: 24,
                    backgroundColor: '#00d4aa',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12
                  }}>
                    🔊
                  </div>
                  <span style={{ fontSize: 14, color: '#fff' }}>소음</span>
                </div>
              </div>
            </div>
          </div>

          {/* 수면 기록 메모 */}
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            border: '1px solid #2a2a2a', 
            borderRadius: 14, 
            padding: 24
          }}>
            <h3 style={{ 
              fontSize: 16, 
              fontWeight: 700, 
              color: '#fff', 
              margin: '0 0 8px 0' 
            }}>
              수면 기록 메모
            </h3>
            <p style={{ 
              fontSize: 16, 
              color: '#a1a1aa', 
              margin: '0 0 16px 0' 
            }}>
              이날 밤 수면에 대한 개인 기록
            </p>
            
            <div style={{ 
              backgroundColor: 'rgba(42, 42, 42, 0.2)', 
              borderRadius: 10, 
              padding: 20 
            }}>
              <p style={{ 
                fontSize: 14, 
                color: '#fff', 
                margin: 0,
                lineHeight: 1.6,
                fontStyle: 'italic'
              }}>
                "스트레스가 많아서 잠들기까지 오래 걸렸어요. 그래도 중간에 깨지 않고 푹 잘 수 있어서 다행이었습니다."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Report;
