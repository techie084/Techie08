<!-- <script lang="ts">
	import { gsap } from 'gsap';

	document.addEventListener('DOMContentLoaded', function () {
		const letters = document.querySelectorAll('.text span');
		const tl = gsap.timeline();
		tl.to(letters, {
			duration: 0.6,
			y: 0,
			stagger: 0.05,
			ease: 'power2.out'
		})
			.to(letters, {
				'--clipPath': 'inset(0% 0 0 0)',
				duration: 0.8,
				delay: 0.3,
				ease: 'power1.inOut'
			})
			.to(letters, {
				duration: 0.6,
				y: 100,
				stagger: 0.05,
				delay: 0.5
			});
	});
</script>

<div class="loader">
	<div class="text">
		<span data-text="T">T</span>
		<span data-text="E">E</span>
		<span data-text="C">C</span>
		<span data-text="H">H</span>
		<span data-text="I">I</span>
		<span data-text="E">E</span>>
	</div>
</div>

<style>
	.text {
		display: flex;
		font-size: 6.5rem;
		font-weight: 700;
		position: relative;
		overflow: hidden;
	}

	.text span {
		display: inline-block;
		position: relative;
		color: rgba(255, 255, 255, 0.2);
		line-height: 1;
		transform: translateY(100px);
		--clipPath: inset(100% 0 0 0);
	}

	.text span::before {
		content: attr(data-text);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(45deg, #ff0000, #ff3333, #ff6600, #cc0000);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		clip-path: var(--clipPath);
		-webkit-clip-path: var(--clipPath);
		transition: clip-path 0s;
	}
</style> -->
