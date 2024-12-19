import gsap from 'gsap';

// @ts-ignore
export const fadeIn = (element) => {
	if (element) {
		gsap.fromTo(element, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
	}
};
