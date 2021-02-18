<template>
    <li>
        <div>{{ name }}</div>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: false,
        },
        name: {
            type: String,
            required: false,
        }
    },
}
</script>