const image = document.querySelector(".image")
const brightness = document.querySelector("#brightness")
const contrast = document.querySelector("#contrast")
const width = document.querySelector("#width")
const height = document.querySelector("#height")
const grayscale = document.querySelector("#grayscale")
const blur = document.querySelector("#blur")
const button = document.querySelector("#btn")
const buttonDown = document.querySelector("#btn-down")
const buttonLeft = document.querySelector("#btn-left")
const buttonUp = document.querySelector("#btn-up")
const hueRotate = document.querySelector("#hue-rotate")
const invert = document.querySelector("#invert")
const opacity = document.querySelector("#opacity")
const sepia = document.querySelector("#sepia")
const download = document.querySelector("#download")
const container = document.querySelector(".container")
const hideTitle = document.querySelector("#birnarsa")
let brightnessLevel = 100;
let contrastLevel = 100;

brightness.addEventListener("input", ()=>{
    brightnessLevel = brightness.value
    image.style = `filter: brightness(${brightnessLevel * 5 }%) `
    brightness.previousElementSibling.innerHTML = `Brightness: ${brightnessLevel * 5 }%`
});

contrast.addEventListener("input", ()=>{
    contrastLevel = contrast.value
    image.style = `filter: contrast(${contrastLevel * 5}%) brightness(${brightnessLevel * 5}%)`
    contrast.previousElementSibling.innerHTML = `Contrast: ${contrastLevel * 5 }%`
})

width.addEventListener("change", ()=>{
    image.style.width = width.value + 'px'
})

height.addEventListener("change", ()=>{
    image.style.height = height.value + 'px'
})

grayscale.addEventListener("input", ()=>{
    image.style = `filter: grayscale(${grayscale.value}%) brightness(${brightnessLevel * 5}%) contrast(${contrastLevel * 5}%)`
    grayscale.previousElementSibling.innerHTML = `Grayscale: ${grayscale.value}%`
})
blur.addEventListener("input", ()=>{
    image.style = `filter: blur(${blur.value}px) grayscale(${grayscale.value}%) brightness(${brightnessLevel * 5}%) contrast(${contrastLevel * 5}%)`
    blur.previousElementSibling.innerHTML = `Blur ${blur.value}px`
})
button.addEventListener("mouseup", ()=>{
    image.style = "transform: rotate(90deg);"
})
buttonDown.addEventListener("mouseup", ()=>{
    image.style = "transform: rotate(180deg);"
})
buttonLeft.addEventListener("mouseup", ()=>{
    image.style = "transform: rotate(270deg);"
})
buttonUp.addEventListener("mouseup", ()=>{
    image.style = "transform: rotate(360deg);"
})
hueRotate.addEventListener("input", ()=>{
    image.style = `filter: hue-rotate(${hueRotate.value}deg) blur(${blur.value}px) grayscale(${grayscale.value}%) brightness(${brightnessLevel * 5}%) contrast(${contrastLevel * 5}%)`
    hueRotate.previousElementSibling.innerHTML = `Hue-rotate: ${hueRotate.value}`
})
invert.addEventListener("input", ()=>{
    image.style = `filter: invert(${invert.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) brightness(${brightnessLevel * 5}%) contrast(${contrastLevel * 5}%)`
    invert.previousElementSibling.innerHTML = `Invert: ${invert.value}`
})
opacity.addEventListener("input", ()=>{
    image.style = `filter:opacity(${opacity.value}%) invert(${invert.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) brightness(${brightnessLevel * 5}%) contrast(${contrastLevel * 5}%)`
    opacity.previousElementSibling.innerHTML = `Opacity: ${opacity.value}`
})
sepia.addEventListener("input", ()=>{
    image.style = `filter: sepia(${sepia.value}%) opacity(${opacity.value}%) invert(${invert.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) brightness(${brightnessLevel * 5}%) contrast(${contrastLevel * 5}%)`
    sepia.previousElementSibling.innerHTML = `Sepia: ${sepia.value}`
})

download.addEventListener("click", ()=>{
    container.style = "display: none"
    hideTitle.style = "display: block; margin-top: 250px"
})
