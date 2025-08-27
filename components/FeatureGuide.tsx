import React from 'react';

const FeatureGuide: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 mb-8 border border-blue-200 shadow-sm">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          텍스트를 입력하면 AI가 3가지 핵심 분석을 수행합니다
        </h2>
        {/* <p className="text-gray-600 text-lg">
          텍스트를 입력하면 AI가 3가지 핵심 분석을 수행합니다
        </p> */}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* 텍스트 요약 */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white text-lg font-bold">📝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">텍스트 요약</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            긴 텍스트의 핵심 내용을 간결하게 요약하고, 중요한 키워드를 자동으로 추출합니다.
          </p>
          <div className="text-xs text-blue-600 font-medium">
            💡 활용: 보고서 요약, 문서 핵심 파악, 학습 자료 정리
          </div>
        </div>

        {/* 감정 분석 */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white text-lg font-bold">😊</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">감정 분석</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            텍스트에 담긴 감정 상태를 분석하여 긍정, 부정, 중립으로 분류하고 시각화합니다.
          </p>
          <div className="text-xs text-green-600 font-medium">
            💡 활용: 고객 리뷰 분석, 소셜미디어 모니터링, 피드백 분석
          </div>
        </div>

        {/* AI 응답 생성 */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white text-lg font-bold">🚀</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">AI 응답 생성</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            입력된 내용을 바탕으로 AI가 개선 방안이나 조언을 포함한 맞춤형 응답을 생성합니다.
          </p>
          <div className="text-xs text-purple-600 font-medium">
            💡 활용: 개선 제안, 창작 아이디어, 문제 해결 방안
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl p-4 border border-gray-100">
        <div className="flex items-center justify-center">
          <div className="text-center">
            {/* <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold text-gray-800">📊 데이터 활용 방법:</span>
            </p> */}
            <p className="text-xs text-gray-500 leading-relaxed">
              분석 결과를 통해 콘텐츠 개선 방향 설정 • 감정 변화 추이 파악 • 핵심 메시지 도출 • 커뮤니케이션 전략 수립
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGuide;
