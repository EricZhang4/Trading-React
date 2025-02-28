import { AvatarImage } from "@/components/ui/avatar";
import React from "react";

const StockDetails = () => {


  const {coin} = useSelector(store => store);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("params", params);
  useEffect(() => {
    dispatch(
      fetchCoinDetails({ coinId: id, jwt: localStorage.getItem("jwt") })
    );
  }, [id]);

  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div>
            <Avatar>
              <AvatarImage
                src={
                  coin.coinDetails?.image.large
                }
              />
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
                <DotIcon className="text-gray-400" />
                <p className = "text-gray-400">{coin.coinDetails?.name}</p>
              </div>

              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">${coin.coinDetails?.market_data.current_price.usd}</p>
                <p className="text-red-600">
                  <span>-{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                  <span>-{coin.coinDetails?.market_data.market_cap_change_percentage_24h}%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button>
            {true ? (
              <BookmarkFilledIcon className="h-6 w-6" />
            ) : (
              <BookmarkIcon className="h-6 w-6" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg"></Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do you want to spend?</DialogTitle>
              </DialogHeader>
              <TreadingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-14">
        <StockChart coinId = {id}/>
      </div>
    </div>
  );
};

export default StockDetails;
