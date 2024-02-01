interface CalendarProps {}

export function Calendar(props: CalendarProps) {
  return (
    <div className="mt-6 w-full space-y-5 border-b border-t border-[#E2DCDC] py-5 font-gowunDodum text-[#3F3838]">
      <header className="flex justify-around text-xs">
        <p className="text-[#804141]">일</p>
        <p>월</p>
        <p>화</p>
        <p>수</p>
        <p>목</p>
        <p>금</p>
        <p>토</p>
      </header>
      <div className="row flex justify-around text-xs">
        <p className="text-[#804141]">&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;</p>
        <p>1</p>
        <p>2</p>
      </div>
      <div className="row flex justify-around text-xs">
        <p className="text-[#804141]">3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <span className="relative">
          <span className="absolute left-1/2 top-1/2 -z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dd9292]"></span>
          <span className="absolute bottom-0 left-1/2 w-[40px] -translate-x-1/2 translate-y-full text-[10px] text-[#dd9292]">
            1시 30분
          </span>
          <p className="text-white">9</p>
        </span>
      </div>
      <div className="row flex justify-around text-xs">
        <p className="text-[#804141]">10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
      </div>
      <div className="row flex justify-around text-xs">
        <p className="text-[#804141]">17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
        <p>21</p>
        <p>22</p>
        <p>23</p>
      </div>
      <div className="row flex justify-around text-xs">
        <p className="text-[#804141]">24</p>
        <p>25</p>
        <p>26</p>
        <p>27</p>
        <p>28</p>
        <p>29</p>
        <p>30</p>
      </div>
    </div>
  )
}
