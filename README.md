# 펫투 - PETO (Pet Together)
- 반려동물과 관련된 커뮤니티 페이지로, 반려동물이 있는 보호자들이 정보를 공유할 수 있고, 반려동물을 사는 것이 아니
라 임시보호를 통해 무료분양 및 입양을 할 수 있는 컨셉의 페이지 입니다.

### `이용 스택`
- React JS
- React Router
- React Hooks : useState / useEffect / useRef
- PostCSS
- Firebase : Authentication / Firestore Database / Storage

### `신경 쓴 부분`
- env 파일에 비노출 정보 등록하여 사용 (Firebase API id 및 User id 등)
- Service 폴더에 Firebase 와 통신하는 코드를 별도로 정리하여 사용 (로그인 / 데이터 불러오기)
- 이미지 등록버튼 및 코멘트 등 작은 단위도 컴포넌트화

### `주요기능 구현`

- React Router 를 이용한 링크 이동
- Firebase Authservice 로그인 기능 구현
- 임시보호신청서 및 커뮤니티 컨텐츠 게시글 등록 
- 커뮤니티 컨텐츠 댓글기능 구현
- Home Header에 견종으로 검색기능 구현
- Form 등록시 multiple image 등록 
- 리스트 무한 스크롤 구현


![1](https://user-images.githubusercontent.com/74849404/134853533-188446a2-3486-4447-8953-2bc2768c8694.JPG)

![2](https://user-images.githubusercontent.com/74849404/134853542-12c8743b-e404-4a4d-9676-450e120e1d43.JPG)

![3](https://user-images.githubusercontent.com/74849404/134853537-07a8df8f-51fc-425f-a9c4-afbe59ce67a4.JPG)

![4](https://user-images.githubusercontent.com/74849404/134853539-7f2e5afc-21be-48b9-85cc-e2fda3668ace.JPG)

![5](https://user-images.githubusercontent.com/74849404/134853541-fada8689-997f-4dae-8b3a-abd491a2bf57.JPG)
