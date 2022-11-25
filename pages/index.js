
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container max-auto px-4 ">
    <div className=''>
      <h1 className='font-bold  items-center'>Navbar</h1>
    </div>
    <button class="bg-sky-500 hover:bg-sky-700 ...">
  Save changes
</button>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kap8xrWMNDM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    {/* <iframe  class="w-full aspect-video ..." src="https://youtu.be/kap8xrWMNDM"></iframe> */}
    <div class="columns-3 gap-8 border ...">
  <img class="w-full aspect-square ..."  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*" />
  <img class="w-full aspect-square ..." src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*" />
  <img class="w-full aspect-square ..." src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*" />
 
  <img class="w-full aspect-square ..." src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*" />
  <img class="w-full aspect-square ..." src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*" />
  <img class="w-full aspect-square ..." src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*" />
 
</div>

<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Username</span>
    
    <input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>
  <button class="md:hover:bg-fuchsia-600 ...">
  Save changes
</button>
</form>
  </div>
      )
}
