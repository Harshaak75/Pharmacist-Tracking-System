import statuscodeVideo from "../assets/Oops Connection Error.mp4"

export function Statuscode(){
    return <div className="flex w-full h-full items-center justify-center">
        <video src={statuscodeVideo} autoPlay loop className="h-[30rem]" ></video>
    </div>
}