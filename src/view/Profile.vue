<template>
  <b-container class="user-profile">
    <b-row>
      <b-col cols="12" class="text-center">
        <img :src="$auth.user.picture" class="user-picture" alt="User Picture"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="text-center">
        <h2 class="user-name">{{ $auth.user.name }}</h2>
        <p class="user-email">{{ $auth.user.email }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div class="user-details">
          <p><strong>Given Name:</strong> {{ $auth.user.given_name }}</p>
          <p><strong>Family Name:</strong> {{ $auth.user.family_name }}</p>
          <p><strong>Nickname:</strong> {{ $auth.user.nickname }}</p>
          <p><strong>Locale:</strong> {{ $auth.user.locale }}</p>
          <p><strong>Updated At:</strong> {{ $auth.user.updated_at }}</p>
          <p><strong>Email Verified:</strong> {{ $auth.user.email_verified }}</p>
          <p><strong>Sub:</strong> {{ $auth.user.sub }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.user-profile {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 10px;
}

.user-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.user-name {
  margin-top: 10px;
  font-size: 24px;
}

.user-email {
  color: #6c757d;
}

.user-details {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 10px;
}
</style>
