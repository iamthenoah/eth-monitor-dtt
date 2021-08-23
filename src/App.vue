<template>
	<div :class="['theme-mode-' + appThemeMode, 'theme-color-' + appThemeColor]">
		<router-view/>
	</div>
</template>

<style lang="scss">

	@import '@/assets/styles/theme-colors.scss';
	@import '@/assets/styles/theme-modes.scss';
	@import '@/assets/styles/general.scss';
	@import '@/assets/styles/global.scss';

</style>
