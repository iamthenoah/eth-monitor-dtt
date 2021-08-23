<template>
    <span class="loading-bar default-color-bg" />
</template>

<style scoped>

	.loading-bar {
		position: absolute;
		width: 100%;
		bottom: 0;
		z-index: 1000;
        height: 5px;
		animation: load 1500ms ease-out infinite;
    }

    @keyframes load {
		0% {
			width: 0;
			left: 0;
		}
		40% {
			width: 75%;
			left: 0;
		}
		80% {
			width: 0;
			left: 100%;
		}
		100% {
			width: 0;
			left: 100%;
		}
    }

</style>
