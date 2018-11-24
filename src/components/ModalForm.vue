<template>
	<!-- <div v-if="getModals[0].addModal" class="modal"> -->
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



<style lang="scss" scoped>
    // @import "compass/css3";

	// @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700);

	/* VARS */
	$height: 40px;


	*, *:before, *:after {
		box-sizing: border-box;
	}

	html { font-size: 62.5%; }
	
	form {
		// height: 100%;
		// width: auto;
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



// new

	.modal {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 9999;


    &__content {
        background-color: #fff;
        height: 50%;
		width: 50%;
		padding: 2rem;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 16px 40px 0px;
        border-radius: .5rem;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 6rem 1fr 4rem;
        overflow: hidden;
		align-items: center;
		
		&--message {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			p {
				color: #909090;
				font-size: 1.2rem;
				text-shadow: none;
			}
		}

      

        &--buttons {
            display: grid;
            grid-template-columns: repeat(2, 8rem);
            justify-items: end;
            justify-content: end;

            .no, .yes{
                text-transform: uppercase;
                font-size: 1.5rem;
                color: black;
                font-family: nunito;
                font-weight: 600;
                text-decoration: none;
                display: inline-block;
                border: none;
                margin: 3rem;
                background-color: transparent;
                cursor: pointer;
            }

            .yes {
                color: black;
            }
        }

    }
}
</style>