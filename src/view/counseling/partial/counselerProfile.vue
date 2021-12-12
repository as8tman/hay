<template>
    <div @click="$router.push('/page/counseler')" class="twoTone-box">
        <div class="twoTone-box--contents">
            <div class="twoTone-box--grade">
                <img src="@/assets/img/grade_s.svg" class="twoTone-box--grade-mark" alt="S">
                <img src="@/assets/img/ico_star.svg" class="twoTone-box--star" alt="별">
                <span class="twoTone-box--score">
                    <strong>4.9</strong> <span>(1890)</span>
                </span>
            </div>
            <img src="@/assets/img/temp_face.jpg" class="twoTone-box--selfi" alt="사진">
            <div class="twoTone-box--nick">
                나나쌤
            </div>
            <div class="twoTone-box--msg">
                오늘도 용기내주어 고맙습니다.
            </div>
            <div class="twoTone-box--price">
                50분 45000원 부터~
            </div>
            <div class="twoTone-box--tag">
                <span>관계</span>
                <span>우울증</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'counselerProfile',
}
</script>