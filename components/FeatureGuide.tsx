import React from 'react';

const FeatureGuide: React.FC = () => {
  return (
    <div className="rounded-2xl p-6 mb-8 shadow-lg border"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        borderColor: '#e2e8f0'
      }}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#0f172a' }}>
          텍스트를 입력하면 AI가 3가지 핵심 분석을 수행합니다
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* 텍스트 요약 */}
        <div className="bg-white rounded-xl p-5 shadow-md border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          style={{ borderColor: '#e2e8f0' }}>
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
              style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}>
              <span className="text-white text-lg font-bold">📝</span>
            </div>
            <h3 className="text-lg font-semibold" style={{ color: '#0f172a' }}>텍스트 요약</h3>
          </div>
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#475569' }}>
            긴 텍스트의 핵심 내용을 간결하게 요약하고, 중요한 키워드를 자동으로 추출합니다.
          </p>
          <div className="text-xs font-medium" style={{ color: '#3b82f6' }}>
            💡 활용: 보고서 요약, 문서 핵심 파악, 학습 자료 정리
          </div>
        </div>

        {/* 감정 분석 */}
        <div className="bg-white rounded-xl p-5 shadow-md border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          style={{ borderColor: '#e2e8f0' }}>
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
              style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
              <span className="text-white text-lg font-bold">😊</span>
            </div>
            <h3 className="text-lg font-semibold" style={{ color: '#0f172a' }}>감정 분석</h3>
          </div>
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#475569' }}>
            텍스트에 담긴 감정 상태를 분석하여 긍정, 부정, 중립으로 분류하고 시각화합니다.
          </p>
          <div className="text-xs font-medium" style={{ color: '#10b981' }}>
            💡 활용: 고객 리뷰 분석, 소셜미디어 모니터링, 피드백 분석
          </div>
        </div>

        {/* AI 응답 생성 */}
        <div className="bg-white rounded-xl p-5 shadow-md border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          style={{ borderColor: '#e2e8f0' }}>
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
              style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }}>
              <span className="text-white text-lg font-bold">🚀</span>
            </div>
            <h3 className="text-lg font-semibold" style={{ color: '#0f172a' }}>AI 응답 생성</h3>
          </div>
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#475569' }}>
            입력된 내용을 바탕으로 AI가 개선 방안이나 조언을 포함한 맞춤형 응답을 생성합니다.
          </p>
          <div className="text-xs font-medium" style={{ color: '#8b5cf6' }}>
            💡 활용: 개선 제안, 창작 아이디어, 문제 해결 방안
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl p-4 border shadow-sm" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
              분석 결과를 통해 콘텐츠 개선 방향 설정 • 감정 변화 추이 파악 • 핵심 메시지 도출 • 커뮤니케이션 전략 수립
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGuide;
