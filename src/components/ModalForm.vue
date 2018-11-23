<template>
		<div class="containerForm">
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
		</div>
</template>


<style lang="scss" scoped>
    // @import "compass/css3";

	// @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700);

	/* VARS */
	$height: 40px;


	*, *:before, *:after {
		box-sizing: border-box;
	}

	html { font-size: 62.5%; }
	

	.containerForm {
		// margin: 16rem auto;
		// max-width: 700px;
		// position: fixed;
		// top: 0;
		// left: 0;
		height: 100vh;
		// width: 100vw;
		// overflow: hidden;
		grid-row: 1 / -1;
		grid-column: 1 / -1;
		background: white;
		display: grid;
		align-content: center;
		justify-content: center;
		align-items: center;
		justify-items: center;
		// top: 50%;
		// left: 50%;
		// transform: translate(-50%, -50%);
		
	}

	form {
		height: 100%;
		width: auto;
		// margin: 2rem 0;
		// position: fixed;
		// max-width: 700px;
		// top: 50%;
		// left: 50%;
		// transform: translate(-50%, -50%);
		
		// &:after {
		// 	content: '';
		// 	display: table;
		// 	clear: both;
		// }
		
		.field {
			display: block;
			border: 1px solid #BDBDBD;
			float: left;
			width: 100%;
			
			&.tnb {
				border-top: 0;
			}
			
			&.half {
				width: 50%;
			}
			
			&.last {
				border-left: 0;
			}
			
			label {
				display: block;
				font-size: 1.2rem;
				padding: 1.5rem 2rem 0;
				text-transform: uppercase;
				color: #999;
				font-weight: 700;
				letter-spacing: 1px;
			}
			
			input,
			textarea {
				display: block;
				width: 100%;
				padding: .5rem 2rem 1.5rem;
				font-size: 1.8rem;
				border: 0;
				color: #212121;
				outline: 0;
			}
			
			textarea {
				min-height: 150px;
				resize:vertical; 
			}
		}
	}
</style>