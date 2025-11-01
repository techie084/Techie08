export function trackEvent(
	eventName: string,
	eventParams?: {
		category?: string;
		label?: string;
		value?: number;
		// [key: string]: undefined;
	}
) {
	// Only track in production
	if (import.meta.env.DEV) {
		console.log('📊 [Dev] Event:', eventName, eventParams);
		return;
	}
	//ts-ignore
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', eventName, eventParams);
	}
}

/**
 * Track page views (automatically handled by GoogleAnalytics component)
 */
export const trackPageView = (path: string) => {
	if (import.meta.env.DEV) return;

	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('config', import.meta.env.PUBLIC_GA_MEASUREMENT_ID, {
			page_path: path
		});
	}
};

/**
 * Track button/link clicks
 */
export function trackClick(buttonName: string, destination?: string) {
	trackEvent('click', {
		event_category: 'engagement',
		event_label: buttonName,
		value: destination
	});
}

/**
 * Track form submissions
 */
export function trackFormSubmit(formName: string, success: boolean) {
	trackEvent(success ? 'form_submit_success' : 'form_submit_error', {
		event_category: 'forms',
		event_label: formName
	});
}
/**
 * Track blog post reads
 */
export function trackBlogRead(postTitle: string) {
	trackEvent('blog_post_read', {
		event_category: 'blog',
		event_label: postTitle
	});
}
