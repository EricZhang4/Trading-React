import React from 'react'

const Withdrawal = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text3xl pb-5">Withdrawal</h1>
      <Table className = "border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1,1,1,1,1,1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell><p>
                June 2, 2024 at 11:43
                </p>
            </TableCell>
              <TableCell lassName = "">Bank</TableCell>
              <TableCell className="">$69249</TableCell>
              <TableCell className="text-right">
                <Button variant = "ghost" onClick = {() => handleRemoveToWatchlist(item.id)} size = "icon" className = "h-10 w-10">
                  <BookmarkFilledIcon classname = "w-6 h-6"/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Withdrawal;