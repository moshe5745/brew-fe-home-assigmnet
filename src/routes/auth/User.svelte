<script lang="ts">
    import { user } from "../../stores/user";
</script>

<div class="container">
    <div class="user-name">{$user.username}</div>    
    <div class="avatar" />
</div>

<style>
    .container {
        display: flex;
        margin-inline-end: 40px;
    }
    .avatar {
        margin: auto;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: blueviolet;
    }
    .user-name {
        margin-inline-end: 10px;
    }
</style>
