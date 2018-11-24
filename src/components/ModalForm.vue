<template>
	<div @click="() => setModals(false)" v-if="getModals[0].addModal" class="modal">
		<div class="modal__content">
			<div class="modal__content--message">
				<p>Package Payment Process Goes Here</p>
			</div>
			<!-- <div class="containerForm">
				<form>
					<div class="field half">
						<label for="surname">First name</label>
						<input type="text" id="surname"/>
					</div>
					<div class="field half last">
						<label for="name">last name</label>
						<input type="text" id="name"/>
					</div>
					<div class="field tnb">
						<label for="email">Email address</label>
						<input type="email" id="email"/>
					</div>
					<div class="field tnb">
						<label for="msg">Message</label>
						<textarea name="msg"></textarea>
					</div>
				</form>
			</div> -->
		</div>
	</div>
</template>

<script>
export default {
	props: {
        getModals: {
            type: Array,
            default: () => {}
        },
        setModals: {
            type: Function,
            default: () => {}
        },
    },
}
</script>