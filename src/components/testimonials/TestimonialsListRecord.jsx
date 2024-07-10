import { GlobalIcon } from "../global/GlobalIcon"

export const TestimonialsListRecord = ({record}) => {
  return (
    <li className="rounded-2xl bg-slate-50 p-16 lg:max-w-sm">
      <div className="flex justify-between items-center mb-5">
        <h5 className="text-xl font-600">{record.title}</h5>
        <GlobalIcon type="quote" />
      </div>
      <p className="text-sm font-600 mb-16">{record.opinion}</p>
      <div className="flex items-center gap-2">
        <img src={record.img} alt={record.name} className="object-cover w-14 h-14 rounded-full"/>
        <div>
          <p className="text-sm font-600">{record.name}</p>
          <p className="text-sm">{record.role}</p>
        </div>
      </div>
    </li>
  )
}
