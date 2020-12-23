# React-KakaoClone

개쩌는 카카오톡을 만들어보자

## Conditions

> 1. 함수형 컴포넌트만 사용할 것 (Hooks)
> 2. 스크린 하나는 무조건 컴포넌트 단위로 쪼개서 만들 것
> 3. styled-component 사용
> 4. Presenter, Container 구조

### Ready for KakaoClone

> 1. 파일 구조 짜기 [React File Structure](https://ko.reactjs.org/docs/faq-structure.html)
> 2. 카카오톡 보고 구상하기

#### Check List ✅

> - [o] git commit message 신경써서 push하기
> - [o] Hooks
> - [o] Make Loading Screen
> - [o] Make Navigation
> - [o] Make Header (재사용 가능한 컴포넌트)
> - [o] Make ChatScreens (Presenter, Container,index 세 개의 파일로 나눈다)
>   > - Container : 데이터 처리
>   > - Presenter : Container의 데이터를 props으로 받아서 보여주는 screen 역할
> - [o] Shap Screen, More Screen 날씨 API받기
> - [△] More Screen Carousel 구현(슬라이더)
> - [ ] Carousel 이미지에 링크 걸기
> - [ ] 단톡방 이미지
> - [ ] Shap Screen 검색창 만들기
> - [ ] KakaoTV 영상 리스트 만들기

```
<a href="http://pf.kakao.com/_ZRQBh/60888445">{img1}</a>
<a herf="http://pf.kakao.com/_ZRQBh/61257645">{img2}</a>
<a herf="https://brunch.co.kr/@andkakao/204">{img3}</a>
<a herf="https://brunch.co.kr/@andkakao/202">{img4}</a>
```

### Other

> - React inline CSS : <div style={{ BackgroundColor : yellow }}>

### Git Commit Message

> - FIX
>   > - Fix A in B : B의 A를 수정
>   > - Fix A which B, Fix A that B : B절인 A를 수정
>   > - Fix A to B, Fix A to be B : B를 위해 A를 수정
>   > - Fix A so that B : A를 수정해서 B가 됨
>   > - Fix A where B : B처럼 발생하는 A를 수정
>   > - Fix A when B : B일 때 발생하는 A를 수정
> - ADD
>   > - Add A for B : B를 위해 A를 추가
>   > - Add A to B : B에 A를 추가
> - REMOVE
>   > - Remove A : A를 삭제
>   > - Remove A from B : B에서 A를 삭제
> - USE
>   > - Use A : A를 사용
>   > - Use A for B : B에 A를 사용
>   > - Use A to B : B가 되도록 A를 사용
>   > - Use A in B : B에서 A를 사용
>   > - Use A instead of B : B 대신 A를 사용
> - REFACTOR
>   > - Refactor A : A를 전면 수정

> - SIMPLIFY
>   > - Simplify A : A를 단순화
> - UPDATE
>   > - Update A to B : A를 B로 업데이트, A를 B하기 위해 업데이트
> - IMPROVE
>   > - Improve A : A를 향상
> - MAKE
>   > - Make A B : A를 B하게 만듬
> - IMPLEMENT
>   > - Implement A : A를 구현
>   > - Implement A to B : B를 위해 A를 구현
> - REVISE
>   > - Revise A : A 문서를 개정
> - CORRECT
>   > - Correct A : A를 고침
> - ENSURE
>   > - Ensure A : A가 확실히 보장 되도록 수정
> - PREVENT
>   > - Prevent A : A하지 못하게 막음
>   > - Prevent A from B : A를 B하지 못하게 막음
> - AVOID
>   > - Avoid A : A를 회피
>   > - Avoid A if B, Avoid A when B : B인 상황에서 A를 회피
> - MOVE
>   > - Move A to B, Move A into B : A를 B로 옮김
> - RENAME
>   > - Rename A to B : A를 B로 이름 변경
> - ALLOW
>   > - Allow A to B : A가 B를 할 수 있도록 허용
> - VERIFY
>   > - Verify A : A를 검증함
> - SET
>   > - Set A to B : A를 B로 설정
> - PASS
>   > - Pass A to B : A를 B로 넘김
