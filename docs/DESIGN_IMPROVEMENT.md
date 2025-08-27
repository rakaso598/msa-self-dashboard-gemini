### `DESIGN_IMPROVEMENT.md`

# 디자인 개선 계획서 (Design Improvement Plan)

## 1. 개요

기존 UI 디자인의 통일성 부족, 컬러 팔레트 불균형, 그리고 정보 위계 문제를 해결하여, 미니멀하고 세련된 대시보드 형태로 개선합니다. Tailwind CSS를 활용하여 모든 요소의 스타일을 재정의합니다.

---

## 2. 디자인 콘셉트

* **레이아웃**: 좌측/우측 분할 레이아웃을 기반으로 하되, 모든 컴포넌트 간의 여백(spacing)을 통일하여 시각적 안정감을 확보합니다.
* **컬러**: 기본 배경은 `#F8F8F8`과 같은 미세한 회색 톤을 사용하고, 카드 배경은 `#FFFFFF`로 설정하여 입체감을 줍니다. 핵심 버튼과 차트의 악센트 컬러는 `#6A5ACD` (SlateBlue) 또는 `#007BFF` (Azure) 계열의 부드러운 톤을 사용합니다.
* **타이포그래피**: `font-sans`와 같은 가독성 높은 폰트를 사용하고, 폰트 크기와 굵기(weight)를 명확히 구분하여 정보의 위계를 표현합니다.
* **컴포넌트**: 모든 카드의 모서리를 둥글게(rounded) 처리하고, 미세한 그림자(shadow) 효과를 적용합니다.

---

## 3. 세부 컴포넌트별 개선 사항

### 3.1. 헤더 (Header)

* **배치**: `flex`, `justify-between`, `items-center`를 사용하여 로고, API 설정, 그리고 "Powered by Gemini AI" 텍스트를 양 끝으로 정렬합니다.
* **API 키 버튼**: 'API 키 설정' 텍스트를 삭제하고, 자물쇠 아이콘(🔒)만 남깁니다. 클릭 시 모달이 열리도록 처리합니다.
    * **잠김 상태**: `<span className="text-xl">🔒</span>`
    * **해제 상태**: `<span className="text-xl text-blue-500">🔓</span>`

### 3.2. 텍스트 입력 영역

* **컨테이너**: `bg-white`, `rounded-xl`, `shadow-md`, `p-8` 클래스를 사용하여 배경과 그림자, 둥근 모서리를 적용합니다.
* **입력창**: `placeholder` 텍스트를 '오늘의 생각이나 기록을 입력해보세요...'와 같이 친근한 문구로 변경합니다.
* **버튼**: `bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors`와 같은 클래스를 사용하여 부드러운 전환 효과를 추가하고 버튼의 시각적 요소를 강화합니다.

---

### 3.3. 결과 대시보드 (Result Dashboard)

* **전체 레이아웃**: `grid grid-cols-1 md:grid-cols-3 gap-6` 클래스를 사용하여 데스크톱에서는 3열, 모바일에서는 1열로 자동으로 배치되도록 합니다.
* **개별 카드**: 모든 카드는 공통적으로 `bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105` 클래스를 적용하여 통일감을 줍니다.
* **요약 및 키워드 카드**:
    * **제목**: `text-xl font-bold mb-4 flex items-center` 클래스로 제목과 아이콘을 정렬합니다. 제목 앞에 `📄` 이모지를 추가합니다.
    * **키워드**: `flex flex-wrap gap-2 mt-4` 클래스를 사용하여 키워드 태그를 감쌉니다. 각 태그는 `bg-gray-200 text-sm py-1 px-3 rounded-full` 클래스를 적용합니다.
* **감정 분석 카드**:
    * **제목**: `text-xl font-bold mb-4 flex items-center` 클래스로 제목과 아이콘을 정렬합니다. 제목 앞에 `📊` 이모지를 추가합니다.
    * **차트**: `Recharts`나 `Chart.js`를 사용하여 데이터를 시각화합니다. 차트 색상은 `#0088FE` (긍정), `#FFBB28` (중립), `#FF8042` (부정)와 같은 부드러운 톤을 사용합니다.
* **AI 응답 카드**:
    * **제목**: `text-xl font-bold mb-4 flex items-center` 클래스로 제목과 아이콘을 정렬합니다. 제목 앞에 `💡` 이모지를 추가합니다.
    * **내용**: `prose` 클래스(Tailwind Typography Plugin)를 사용하여 마크다운 렌더링을 깔끔하게 처리합니다.

---

## 4. 구현 유의사항

* `next/font`를 사용하여 폰트를 최적화합니다.
* `tailwind.config.js` 파일에 컬러 팔레트를 정의하여 재사용성을 높입니다.
* 모든 컴포넌트의 반응형 디자인을 세심하게 확인합니다.
* `transition`과 `hover` 효과를 적절하게 사용하여 동적인 사용자 경험을 제공합니다.