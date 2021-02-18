<template>
    <li>
        <h4>{{ name }}</h4>
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