import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const FeatureGuide: React.FC = () => {
  return (
    <Paper elevation={2} sx={{ borderRadius: 4, p: 4, mb: 6, bgcolor: 'background.default', boxShadow: 1, border: '1px solid #e2e8f0' }}>
      <Typography variant="h5" fontWeight={700} align="center" mb={3} color="text.primary">
        텍스트를 입력하면 AI가 3가지 핵심 분석을 수행합니다
      </Typography>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 16 }}>
        {/* 텍스트 요약 */}
        <Paper elevation={0} sx={{ borderRadius: 3, p: 3, minWidth: 260, flex: 1, bgcolor: 'background.paper', border: '1px solid #e2e8f0', boxShadow: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 28, marginRight: 12 }}>📝</span>
            <Typography variant="subtitle1" fontWeight={700} color="text.primary" sx={{ fontSize: 18 }}>
              텍스트 요약
            </Typography>
          </div>
          <Typography variant="body2" color="text.secondary" mb={1}>
            긴 텍스트의 핵심 내용을 간결하게 요약하고, 중요한 키워드를 자동으로 추출합니다.
          </Typography>
          <Typography variant="caption" color="primary.main" fontWeight={500}>
            💡 활용: 보고서 요약, 문서 핵심 파악, 학습 자료 정리
          </Typography>
        </Paper>
        {/* 감정 분석 */}
        <Paper elevation={0} sx={{ borderRadius: 3, p: 3, minWidth: 260, flex: 1, bgcolor: 'background.paper', border: '1px solid #e2e8f0', boxShadow: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 28, marginRight: 12 }}>😊</span>
            <Typography variant="subtitle1" fontWeight={700} color="text.primary" sx={{ fontSize: 18 }}>
              감정 분석
            </Typography>
          </div>
          <Typography variant="body2" color="text.secondary" mb={1}>
            텍스트에 담긴 감정 상태를 분석하여 긍정, 부정, 중립으로 분류하고 시각화합니다.
          </Typography>
          <Typography variant="caption" color="success.main" fontWeight={500}>
            💡 활용: 고객 리뷰 분석, 소셜미디어 모니터링, 피드백 분석
          </Typography>
        </Paper>
        {/* AI 응답 생성 */}
        <Paper elevation={0} sx={{ borderRadius: 3, p: 3, minWidth: 260, flex: 1, bgcolor: 'background.paper', border: '1px solid #e2e8f0', boxShadow: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 28, marginRight: 12 }}>🚀</span>
            <Typography variant="subtitle1" fontWeight={700} color="text.primary" sx={{ fontSize: 18 }}>
              AI 응답 생성
            </Typography>
          </div>
          <Typography variant="body2" color="text.secondary" mb={1}>
            입력된 내용을 바탕으로 AI가 개선 방안이나 조언을 포함한 맞춤형 응답을 생성합니다.
          </Typography>
          <Typography variant="caption" color="secondary.main" fontWeight={500}>
            💡 활용: 개선 제안, 창작 아이디어, 문제 해결 방안
          </Typography>
        </Paper>
      </div>
      <Paper elevation={0} sx={{ mt: 2, borderRadius: 2, p: 2, bgcolor: 'background.paper', border: '1px solid #e2e8f0', boxShadow: 0 }}>
        <Typography variant="caption" color="text.secondary" align="center">
          분석 결과를 통해 콘텐츠 개선 방향 설정 • 감정 변화 추이 파악 • 핵심 메시지 도출 • 커뮤니케이션 전략 수립
        </Typography>
      </Paper>
    </Paper>
  );
};

export default FeatureGuide;
