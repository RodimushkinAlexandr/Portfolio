<template>
  <div class="info__no">
    <p class="info__no-text">Weather forecast will be shown here</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.info__no {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 155px;
  left: 0;
  right: 0;
  bottom: 0;

  .info__no-text {
    font-size: 21px;
    color: #394c60;
    box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  }

  @keyframes infoNo__Btn {
    0% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(0px, 20px);
    }

    100% {
      transform: translate(0px, 0px);
    }
  }

  &-btn {
    animation: infoNo__Btn ease 1s 3;

    span {
      font-size: 35px;
    }
  }

  @media (max-width: 520px) {
    top: 140px;
    padding: 0px 10px;

    .info__no-text {
      font-size: 19px;
    }
  }
}
</style>
