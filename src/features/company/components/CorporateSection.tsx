export const CorporateSection = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col items-center p-5">
        <h3 className="text-slate-900 m-1 text text-3xl font-bold">会社情報</h3>
        CORPORATE
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 m-3">
        <div className="flex justify-center p-5">
          <table>
            <tbody className="align-top">
              <tr className="m-2">
                <th className="text-left text-slate-900 m-1 font-bold px-8 py-0">
                  会社名
                </th>
                <td>xxxxxxxxxxx</td>
              </tr>
              <tr className="m-1">
                <th className="text-left text-slate-900 m-1 font-bold px-8 py-0">
                  代表名
                </th>
                <td>田中太郎</td>
              </tr>
              <tr className="m-1">
                <th className="text-left text-slate-900 m-1 font-bold px-8 py-0">
                  所在地
                </th>
                <td>100-0005 東京都千代田区丸の内１丁目</td>
              </tr>
              <tr className="m-1">
                <th className="text-left text-slate-900 m-1 font-bold px-8 py-0">
                  設立
                </th>
                <td>2023年5月1日</td>
              </tr>
              <tr className="m-1">
                <th className="text-left text-slate-900 m-1 font-bold px-8 py-0">
                  資本金
                </th>
                <td>10000</td>
              </tr>
              <tr className="m-1">
                <th className="text-left text-slate-900 m-1 font-bold px-8 py-0">
                  事業内容
                </th>
                <td>
                  ・人材紹介事業
                  <br />
                  ・キャリア支援事業
                  <br />
                  ・研修事業
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-5">
          <iframe
            className="w-full h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280306898523!2d139.76454987578774!3d35.681236172587255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1696610045524!5m2!1sja!2sjp"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
