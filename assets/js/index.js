function showMenu()
{
    document.querySelector(".navbar").classList.add("open")
}
function hideMenu()
{
    document.querySelector(".navbar").classList.remove("open")
}
window.onresize = hideMenu


function animateElements()
{
    hideMenu()
    animatables = document.querySelectorAll(".scroll-animatable")

    animatables.forEach(animatable => {
        if (animatable.getBoundingClientRect().top < window.innerHeight-60)
        {
            animatable.classList.add("animate")
        }
        else
        {
            animatable.classList.remove("animate")
        }
    });
}
window.onscroll = animateElements

