'use client';
import UploadIcon from "./UploadIcon";

export default function UploadForm() {
    async function upload(ev) {
        ev.preventDefault();
        const files = ev.target?.files;
        if (files.length > 0) {
            const file = files[0];
            const res = await axios.postForm('/api/upload', {
                file,
            })
        }
        console.log(res.data)
    }

    return (
        <label className="bg-green-500 py-3 px-6 rounded-full inline-flex gap-2 border-2 border-blue-300/50 cursor-pointer">
          <UploadIcon />
          <span>Choose File</span>
          <input onChange={upload} type="file" className="hidden"/>
        </label>
    );
}