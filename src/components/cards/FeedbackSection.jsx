export default function FeedbackSection() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <h3 className="text-scotia-grey-900 font-semibold text-[15px] mb-2">
        Let us know what you think
      </h3>
      <p className="text-scotia-grey-600 text-[13px] mb-3 leading-relaxed">
        It only takes a couple of minutes and will help us improve the app.
      </p>
      <button className="text-scotia-teal font-medium text-[13px] hover:text-scotia-teal-dark transition-colors cursor-pointer bg-transparent border-none p-0">
        Provide feedback
      </button>

      <div className="mt-6 flex items-center gap-3">
        <div className="bg-[#6B2C91] rounded-full px-4 py-2 flex items-center gap-1.5">
          <span className="text-white font-bold text-[13px]">cdic</span>
          <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-[#6B2C91] rounded-full" />
          </div>
          <span className="text-white font-bold text-[13px]">sadc</span>
        </div>
        <div className="text-[13px]">
          <span className="text-scotia-teal hover:text-scotia-teal-dark cursor-pointer font-medium">
            Learn more
          </span>
          <span className="text-scotia-grey-600"> about CDIC on their website.</span>
        </div>
      </div>
    </div>
  );
}
