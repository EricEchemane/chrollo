/**
 * Run this function to fill up tracks of the sliders.
 * Remember to only run this function in init state or useEffect (initial render)
 * for every component that uses this
 */
export default function fillSliderTracks() {
    const sliders = document.querySelectorAll('input[type="range"]');

    const rangeToPercent = (slider: any) => {
        const max = slider.getAttribute("max");
        const percent: any = (slider.value / max) * 100;

        return `${parseInt(percent)}%`;
    };

    sliders.forEach((slider: any) => {
        slider.style.setProperty("--track-fill", rangeToPercent(slider));

        slider.addEventListener("input", (e: any) => {
            e.target.style.setProperty(
                "--track-fill",
                rangeToPercent(e.target)
            );
        });
    });
}