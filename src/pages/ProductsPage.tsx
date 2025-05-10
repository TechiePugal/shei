import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Settings, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import CallToAction from '../components/CallToAction';

// Product categories
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'textile', name: 'Textile Components' },
  { id: 'automotive', name: 'Automotive Components' },
  { id: 'petroleum', name: 'Petroleum & Oilfield Parts' },
  { id: 'architectural', name: 'Architectural Hardware' },
];

// Product data
const products = [
  {
    id: 1,
    title: 'High-Precision Loom Parts',
    category: 'textile',
    image: 'https://www.supergroupscbe.com/images/manufacture/sd1000e.webp',
    description: 'Precision-engineered components for textile looms, featuring exceptional durability and dimensional accuracy.',
    link: '/contact',
  },
  {
    id: 2,
    title: 'Spinning Machine Components',
    category: 'textile',
    image: 'https://www.supergroupscbe.com/images/manufacture/super_rs1.webp',
    description: 'High-wear components for spinning machines, manufactured with premium alloys for extended service life.',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Engine Block Housings',
    category: 'automotive',
    image: 'https://www.my-cardictionary.com/fileadmin/user_upload/Inhalt/Produkte/Motorblock/motorblock.jpg',
    description: 'Lightweight aluminum engine block housings with optimized thermal properties and structural integrity.',
    link: '/contact',
  },
  {
    id: 4,
    title: 'Gearbox Components',
    category: 'automotive',
    image: 'https://www.want.net/wp-content/uploads/2025/01/planetary-gear-1024x683.jpg',
    description: 'Precision-machined gearbox components with tight tolerances for automotive transmission systems.',
    link: '/contact',
  },
  {
    id: 5,
    title: 'Pressure Fittings',
    category: 'petroleum',
    image: 'https://image.made-in-china.com/2f0j00OGzkSbaqAVoZ/High-Pressure-Flow-Control-Integral-Fittings-Oilfield.webp',
    description: 'Corrosion-resistant pressure fittings for oil and gas applications, designed for high-pressure environments.',
    link: '/contact',
  },
  {
    id: 6,
    title: 'Pipeline Joints',
    category: 'petroleum',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMWFRUWFhoXFxgYGBgXFxgaGBUXGBgXGhgaHSggGh0lHRcYITEiJyorLi4uGR81ODMtNyotMCsBCgoKDQ0NDw8PDisZFRkrKysrKysrNy0rLSstLSstLS03LTctKysrNy0rKysrKy0tKy0rKy0rKysrKysrLSsrK//AABEIAMYA/gMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAABAUGBwIDCAH/xABCEAACAQIDBQYDBwIFAgYDAAABAgMAEQQhMQUGEkFRBxMiYXGBMpGhFCNCUnKxwWLRM4KS4fBToiRDc7LC8RUWY//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABETH/2gAMAwEAAhEDEQA/AIBFPSyLE0zrJW1ZaqJHBifOn7YO8U+GN4n8J1Q5ofO3I+YqDxT+dLYcVagvXd7fWDEWR/upT+Fj4W/Q3P0NjUpBrm6HFf8AP9qlu7u/M+GsrHvYvysfEP0P/Bv7UTFy1izW1pp2FvFBi1+6fxWzRsnHtz9RlUC3k3gkxW0WwKtwwRKS5W97ooLMRo2bKoHU/ILUDUh21tWLCwvPM3CiDPmSdAoHMk5AVGd3trW/8Lh4n4wLgyMWVVvYu55Z5BRroLZ1u313ZOMw3A0795G3eIRwhCwUizLb4bEjW4vrVwZ7r75jGIz/AGeSNVYrxEqV9rG5tle17GpGManEVBuRqFBNvW2lV0uzlZYY4HMbX4fDrEi5sy+dra3uzXN6kA3nw+FKw8HAg1JNznzt8TEnUnzoJaDXtRFu0DBjIM7eYQ2+tqWYPfTByEDveAn84K/U5VBIqKxSQEAggg6EZg+hrKgKKKKAooooCiiigKKKKAooooCiiigKKKKAooooOPA1Zh600XopUstbknpCDWXHQOkeJ86WRYz+1McN2IA51aG7OzoGw6STRcStxcMIyRlU8PeOxzzINh5Ggi8GMKkMrFWGalSQQfIjMU97B20qYp5ps++QJKyjxqVbiEqgakkDiFs7Dpm+7tdmcM7vO8kowrNeBPgkZT+ZugNwCPiFjTJ2ibtx7OeJoXZopSy2Y3KOoDW4tSCLnyt55BYOxMUFwrzq93xLFw4ByivwRWB+HwAG3Vmpl2ht5sFZiwKsb8LG5c+XO/npUV2Xv0MPg1h7vjljBSI/+WVuSpfndQbWHxW5VE8VjpJnMkrFnOp/gDQDyFXRLtv76S4mXjjH2cBSgCHxEMQTdhzJA0plick5Zsfck/vWGx9kvPmDwJze30Ucz9Kl2D2ciDhiAXlxtc3PmRn8tKBpw2Ac5t4fLU/IHKlf2IAamnDGYV4iA4tcXBGYYdQeYvWOy3iedY5XCAhrEmwL/hW/rQGxNszYU/cv4ecbG6fIfCfSrF3e3rhxNk/w5fyHn+k8/TWmLa27aR4aSWQjiAuhAsS2Vr216WqEWII63yIyIPLTnQXoDXtRjcneA4mMpIR3sdrn8ynR7deR86k9RBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQcc2rysVesqK8vRxV4RXhoM0kINwbGrS3U23FjhhMGEZJSBDIFAERiju3EDrxMLi3maqmnbdTbrYHFRYlV4+7bNdOJSLEA8jY/Sgvze3HWk7j4VRV4QLgG+lra2ta3lVbdpO1HmjgSWS5R2ZRbxPdeEsx8hlfnenneXtYw8sRTDwvI7DWYBUjJ/Fa92I5WsPOquxmNeV+ORuJrAX0yGmXKrQK1SPdnYBnIkluIhoNDIR0/p8+dJN1difanJfKFD4zzY2uEB5dSenrVnQ4JnyiClQvwg2YW5BbWIt0PKmBDIAq2AAAFgALADoBXuxdqGI8MyB4wSRl4hc535G/tW3C4Z5n4Il4m6aADqxt4Re/n0qZbG3dihALfeSfmIAC/pU3sPM51UR7bIn2g6tBh3WNF4ULWQZm5N2y6DK+lM2I3Nxg8XdBx/S6sfSxIvVqXNuZ6c/f8A2pJPLoP/AKy5+elMNVVJNIAI5Gk8GiOW8J/S2lPW7WxkxUbt4WPGU4TnYAZkgaX69Kf95dnriY7WAlUHgbnf8pPMcvLKq32aXgk7yNjHJoSMtDmp6j1qKmgwg2fi8M4a/eFkYXvZbqupzIuQfUVZYqj8Zip8Q3eNxyMBYEKcrZgCwsM6uXZ+JDopBF+EXHMGwyNKhXRRRUBRRRQFFFFAUUUUBRRRQFFFFAUUUUHFytWxZK1zQsjFHUqymxUixB8wdKwo0Vqb1YG4ux45FkMgIjRlW62DSyMCzIWN7BUsSejC1Vsr1Od1950+yjCOJBOJr4d0tYmchW72+oVrEWztbpREuw3ZlBjcU0kV8PhVADov/VGTLEx/DaxJ5G/nTf2mdnmHweG+0YUyAI6rIrtx3DmwYHUEG1x0NWBvNiVwUEGGUER8JDML5kWvxHqxJY31qC78bX4tnvEX8JaPhFrklWuEB6ZVRVsa2pbs3BtPIsSfEx9gBqx8gM6SVP8AcfZfdRGZvjlHh/pTl/qOfyqB5iwwgiWKHwhBkdbtqWPUk51Jd0doOHZe7DTMg4CBZFF/GzD8IzX1yFMUhHP5DMknIADqSbetWFu1sn7PFd7CRs5D0yyQE8lF8+Zuao37O2dHhYiBZRcvLIxALHmzHkPLQDKqw3x7XlQtHgFVzoZnBK5EfAmXEOhP1qP9qu/zYx2wuHa2FQ2J5zMDqT+QHQc7XNVzTSQ/43fTaMrcT43EX18MhQD0VLCpPuh2lTq6xY2QzRMbCRv8SO+V+IDxLfW+YzN6roVO+zbs/k2i/eS3TCq3ibnIR+Bf5NQW/CWduCIcbDMkGyLfMcTaC+ttTS3C7qQIxkkUSSM3FoeAE68K8+uda9tbxYTZUQiRbuF8EKW4v1O34R5n61Uu8u+mNxRIaUxxnLu4iVHu3xN65elXUXHi5kQW4o08uJF+l6QO17EexB/YiueJYUJzVSTzNiT7nM0t2RtifCsDBIUA1TWNvIppY+VjTVx0ZsvbBBCyG4OQY8j0P96kINVXu9ttcZB3i+Eg8Mi3vwNa9r9DqKsLd/F95CCfiXwn1Gn0tSocqKKKgKKKKAooooCiiigKKKKAooooIxvduNg9oL99HaQfDKnhkHqfxDyNxVE769mWLwF5FBngGfeIDdR/Wuo9Rl6V07WLChriut+ExJjdXW10ZXF9LqwYX+VWx2i7Iws201w+FgRJbHvWuVjLFS5LAZDhUXJtzApn2/2b2WEYV+OZ2IcEcCsDY94gzKqvO+diDrkTST47thwrwX7l2lZfFE1u7vbMFua38r2qrMbtJ5834QOJmVVHCq8XIDoBkKle0Oyp44GdcSrzKpYpwEI1hcqrk3vrYnI+VQmO1hbS1ELNkYDv5ki5MbueiDNj8sverkwezjKv3RS6/gJIsoFhwnS+mVV7uThbLJLbMngX0Fi31y9qmG7OPOGnWWe8saLIbAWfisO7JzswA4h6sDVgkG6GyzJiXaVSBhyAVP8A1SMgR/SpDf5gaRdtm9Jw0AwsTWlnHjI1WIZEDoWNh6Xqe7KiIQOw4XkvI9uRbM5+QsL+Vcx77bcONxs097qXKx/oQ8KexALe9KkMX/PLyr0UGt+DwryuscY4ndgqjqSQB+9RpIez3dFtpYkR5rElmlcclubKD1JBHzq8d59uR7OgXC4RVWQKFVQLrEugYjmegOp1rDZ2Di2Hs4IoDTNr/wD0mYZkn8qj5AVW+1MaS3E545ZpAo6u7Gw9FH0AqowiwEuJdsyzE3d3JOvNjzPkPpWOK2VHHIyfHwkC562F8vepnGqxJYWAQXPmRmT7mop9nke8gR2BYkkAkAk3PyvQKt39kpiMRFCyKyM3iBAtwgEtf/nOmrtK3N//AB8waHiOHkzS+ZQ3zTi1t0vU/wCy7Z/FLLOdEXu1/U2b/QLTr2uYLvNnt/SwPzBH9j7UFPdnWPMeKMd/DMhU/qTxqflxfSrx3Nk/xV81b5gj+K553Pe+NwxHN/3jaug9yhnKf0j9zUKlNFFN22tsw4WMyzyBEHXUnoo1Y+Qohxpv2ptvD4cXmmSPoCRxH0XU1Uu8HabPiLrhwcPHpfIysOpOYT0Fz51FEl4mLE3Y6sbsx9SczzoYuqTtAwYORkbzCG31tWzDb94NzYuyfrUgfMZVUESHnl+/yraJFXW/ztVXF94fELIoZGDKdCpBB9xW6qJ2TvBJh3vBcE6qDcMfNCM/3q09g7ziUATIYXOXitwsfI3y9DURI6K8vXtAUUUUBXhFe0UFZ7b3JlXG4ieG7DFIVD5MYJGKlrjImNuBRfUemnmyC2Fw8mJxDKZixiBv4FRZCihb6cTXYnnkOQqy2NVZ/wDsmBJkwwmSTgZlK8Dsrqzk5eEh7E2PLKrAg3s2wv2HEurHiaMra/4pLJ4emtU1xgeg/irV7UN0UwmCE8chUPIgMQPFHmbgqTmLa20qqcMvE6rrxMo+ZF6VVjbFh7vDxJzCgt+pvE31NO2y4e8nij/NIoPoDxH6Kawwez5Z+IQqGKi9uJVLdEXiyLHkDYeYpZutGyY6JZFZGUOxDCxFoyNPegnm+G0e5wWKkX4lgkItoCQVB/50rle1sumXyyrpDfxTJs3GKv8A0Wb5Wa30rnMil6RiKtfsH3a7yZ8bIPDD4IuhkYeJv8oNh+o1VVugv0HXoPc5V0gYxsnYoUW70Rqt7WvNMQCberfSoIxvltv7TiWIP3cV0TpkfG/ucvQCozuhCcTiWxbD7uK6QDztYt6gfv5UnfDPOogjJHHkzflQfEx/b1NTLCwx4eIIvhjjX3t1PUk/U1Qi3mx3AgRfifM/pH9zl7GnXdDe6IYdcPIgjdF4EZrcDsT8RPIkn3NQ3GTGWQu2V9B0A0HyqS9newvtGJDsLxwkOehe90XzsfEfQU0WnsLDFI/ELMxLHIA59bc7UwdqmJCYF78zf/SpN/pUwqou3Ha/hXDgjQAjzfO3+lf+6oittwoL4yIfkRnP+VeH93FdC7kxWhZvzOfkoA/e9Up2dYQgSzWza0S+x4m+ZIHtVyba25FsrAq8ubBQEQfFI5zt5C+ZPIUWlG+W9kOz4uOTxO2UcYPic9fJRzNUDtzb0+MlMuIfib8IGSRj8qDkPPU8+gR7a2zNi5mmnbidv9KgaKo5KK92ZgWlJOiD4m/gef7UGzB4dpDYaDUnQf3PlSrGY1MMtxcnS/4m5nyUClZlVRwqLAZAf79fOkGHwiT4mHjayqxvf4SPiz91FBNN3dh95AuImyDEWjuQwBzDMcrX5CmjfPDLAA8d7MGsuZswF8vLP6Uk3k2sWkA4yY0K8NtO814gOdsgDSrCuAl8dxNHJfuVbNy51kQ6og0vkCSB60Zdn8qwR/bJ/GSDwC2fDoCL/iY6HkKecLtyPEAx3VZCD4L3NuVvzH00ph2w/A/2dB91EVVRzACAgE6ki9adk7IaORp1+8MamSMBb3ckIpsMzYMxsKC19zNvOq9xi2AKgmKVjYSItuIEn8S3HqCKmUUoYXUgjqMxVPttQRRgzpwyuwPdqeIjq3j+AEWuOROVSnc3bUIZvvVKNlcG4DA2z6epoid0V4pvnXtQFFFFBE+1LFyxbMxLw34uEBiNVRnVZHHmFJqtd0MXh8JH3cg4mkjWXhU2ZuO4RFPQBQotlck1ecsYYEMAQRYg5gg6gioHvRu5h8NHB3USgLOCCc+7urkKl/hBOVh6UED7SMM7YESSMWdJIwRe6xKbgRp1A0Lak55ZAVpsf/Hi/WP5NWRvzBO8E3AA6cIcgGzqUIJax+IZX6+tVpspwJoz/Wv1Nv5pVWJgNpyxSXA8HEt2Bs63YB2to1lJNvKpjtbb0M20sL3R4kjV4+PkxkGWZzIHCPdqhMi1oZypDD4gQR6g3FUWxiMQCCpzBBVgc7g3BHyqhN493nwcvA1zGT90/J15Z6cQGRHlVwYLaKzRrIpyOoP4WGTL871jiSHBVgGU6hhcfI0FVbibM77aGGRhde8Dt6IC37qKtDtg2pcYeLqzykeg4F/9xPtSfZOBghxUZiijjPBKSVUKTki2NuXiqOdpmLJxUY6Qj6sf7UC3dMfdM35ntfyUD+b1txve4niXDxtIkYDNwi9+hPl0HvUa2ftBvs4jGQDNfqbm9vSpNuXvd9j4kkiJjZuIuNbkWAI1t59KBpwkDSOI0UmRmChSLEMeRGo96vLdjYq4TDpEpubXdvzOc2P9h0Apt3awDSSHF4hfvLcMRIsQhzaw6GwAvnYedScmiE+0casMbyP8Ki/r0A9TlXMe+W1mxeLY/EeOwt+J2IB01A8KDyU1Pe1vfYNbDwMbdR7jvD5DRRzNzyFQrcnZd2+0MCQptGNbtoWHW2g86irD3K2ckIXvCBDhk72VjpcZ6+bXPtVdb8b0PtDEtKbiNfDEnJUHMj8zak+g5VIu0jahw8KbOQ2drS4q3MkeCEnmBqfQdarpc+Vz+9AqwkJdrD1J6DnUg2bie8mTCwoenFeyr+YnmfM+dJ8GEjS1wTqx8+npTnumiYeCacOpdnYAG/EQouABzBZtfKglGN3TgQGNixe3+IGIuSLghdLeVV5LiO6mso4ijEE9bXBtTls/abTylLyGWQ2zuTIR4vbS4HIClGP2ZhmSYpI/fwjjmyJia7W4VYi1x1BzzqhtxcscwFgysGDcWVsuRHOpDs6SExwmTjaSIFQmXdseIsGJIvlfrUbw60vilVdTUGzbOHe7SZksSzHqTz/50pPu7tFopb8R4eBrKCQC1hw/z9Kc0xkbfET5ZfvTTjMOqNdc1bT+R60C91bFu1yEJXLU5DlfzvrT7u9HFh/u5GeOSdCEMYDcIQ+dw19dKjOHMjMqxqxZjkVIFvUnQVYmxo2g4RMRLY3Zfw3yvY9Poaon+7auMNH3hu1vpy+lOdasNIGUMNCAR6EVtqIKKKKArTi8MsilHUMp1B0rdRQRjam5GFmQp408QbiVzfLlY3BU6WNc477bAbZ+Mkg1CkNGeqk3X+3tXWtQ7tA3Bg2mvEfu50UhJB01CuPxLf3GdCKeXFho1cGwZQb9Adamo2XgcVAOBWhkUAK8djxc7vxeFgc/PPI1Xw2RiMC5wuLiKZnu2teNwdQjaNfM218qW4PEtCrpG3Ar24wLchy6ZZZVVZ4PFvCbqcjqDmptlp/NPEe8in4o2B/pII+tqQ7AhhlnCTkrGou3CbMei3Gg6kUv3t3eiw/jgm41JF0IuyBtPGMj6a50GezdqiTEqQpW0UgzIzu0Z5aaVHu0UHvYn5FCv+k3/Y15s7Ed3NGx04uE+ji378NOm82CM8JUfGp4k9RkV8ri4oIhsXEDiKHnmvr0q3+z7ckkrisUpAFmiiYW9JHH7KfU1RDXBsbgg+hB/ipTs3tJ2nAvAuJLqMh3qiQgdOLU+5NQdMSzKguxAHnVV9ovaUiK0GHs7G6tn4R+sjl/SDnzsKqvbO+OOxX+NiHI6L4B9Df61p2NsN5iGN0j/NbNv0g/vp60MZ7KwD4yUs5JW95H/wDiPM+Wgq3Ng4SPC4Z8dKtocOhMKfnZclsOl8h1Odatyd1O+A8HBhl/7zzA635tSft22wESDBR5AjvHAyAVfDGvzz/y1RUePxjzSPLKbySMXc+ZPLyGg8hS3Y+CLAyHQGw8zzPtpTaiEkAak2+dPrY3g4MPEhdslCjUk889SdagRTa60Q7SCeBr2vfL9qmc258caqZW7xnW91JCrnmB1scr1Bdr4HuZnjBuBYg8yGFxfz5e1Av2Pjo0xkU5DBFcls7tmjLxC3mwNvKnPa+04ljMGGLsrkNLI4ALWzVFAA8N7k3qLo1bTLyoFgxXIVkr503gVsSWgd4paWowIsRcUxpLSyGagkOxOCBX4QzFmLEnM2C5RjyvfPz8qmmNwk8mDwzxsvH3PFNbIsWAYgHTwnLr51XEGKp52dtaWIEI5CsLFdVN+djofMVRYm5u3JFZcLiCWZgDGeEjhS2QLaPn8ha9ToVW25G2Ud0XEz+NL92HyDE5ZHTIcjzNWQDRHtFFFQFFFFAUUUUCTaWzop0McyLIh1DC4/2PnVb7xdmDg8WCcEc4pCbj9MnP0Yc9atOig52xe6mMRvFhpgRoUF7HqCtOCbG2jOiR/ZpTwWuSvAWIyBYsdc+VXzRQ1UOyuyueQ3xUixJzRPHIR04slT5N7Vo3g2PJhHKvdkJ+7k/MOQbo40PXXnlctacRhkkUo6hlORUgEH2oa522psiKc8TAq/5lyPuND700DdRb/wCM1v0Lf53t9KvXG9neFc3jaSLyBDL7BgbfOtUHZthwfHLK46eFfqBeiqgwG78SMAqtI504vET6IMudWbu1uKzWkxV1XURD4j+s/hHkKm2ythYfDf4MSoTq2rH1Y5mnECiaxjjCqFUAAZAAWAFcv9oO1PtO0cTKDde87tM72WIcH7hj710rtzF9zh5pSbcEbNf0U1yKZSx4jqcz6nM/vRYcNlqOPiOij6nIfzUi3NhjGImndwvCq8NxoWuCR52X61HcLCSlxzNZYbEmPiHJrX9qBY21XlxLSSs4JJSMZ2VSSAtvS3qSad59hxOximZ1xJF1IBZUVQTwyciTY8/Dl1qKSYoM4axsCL+YDXtUl2rt2ECQwF2kluCzAqI1YZgXFyTpQRcHIH3rA0MayVqDJJa9LVqcViDQKFelKS0hDVsV6Bzjmpfh8TamJZKUxS0EjixAOtSjYm+WJw68KsJFtkJLm3owz9jVexz2pbFiqDpuiiiiCiiigKKKKAooooCiiigKKKKAooooCiiigivalOU2ViyNe6K/6rD+a5b4rV0/2tLfZOL/APTv8mBrlx+dFiULIscQ4srKPUkjS1eYXZLzL32axXtf8R9By9TRFgPtEsMd7Xa1uR8Nz72FL94cU6SDDRtwKFVn4bHrwrfkAB73oI3tLAmEjxcSnQ2scuR86TiWpJiMCksYMjcIvk18lOlrfiP7VG8ThzG7IdVNstD0Pyoo471nSe1ZK9Eb68rASVmDQBr0GvKKDMNWxHrQKyBoFiSVvSWm8NWxXoOvKKKKIKKKKAooooCiiigKKKKAooooCiiigKKKKBr3owPf4TEQ/nidfmptXILqRcHIjIjoeYrtE1zD2t7tnBY9yBaKcmWM+vxr6hifYiiwiwU9mR+lj/2kH96zxeIN76jocr/70j2UwaMdQbH2/wCCtmFwzyyHjBCLlw6Bugv50DmuIjWJJHLALnwFb8Wunv7WqKYrEGR2c6sSfS9TGLDPjJXEAL2+JmNlF9PEeR5CmDaOyTC5SVDGwzsTkRc2I5EZajpQNBr29LPsq9TWabMLuscd2kbReZ/todelFNxrJZKyxmGaNijCzDl/IPMedJ70CtXrYKRBq2rJQKLV4KxV6yvRADWQNY2ooOxaKKKIKKKKAooooCiiigKKKKAooooCiiigKKKKApi3v3Yh2jhzBMPNHA8UbWyZf5HMU+0UHLG3N1cXsyUpOn3TGyyrcxt0N/wnqD9aV4Kb/wAO6gDiYsOI5kA2A+n710risKkilJFDK2RVgCD6g1Wu8PZSLs+Afu75mF84/wDI2qehuPSiq+3f2tLh37qFiY2b4XUHxEWDZEWN7DW1rVjjO9MjvifDKuqOoullyt+G2dhbXlWW091toYcl3w0lkBJZbOtgLm5B0pHtF+8W/EcgWZmJYtYeFddOlBqOCeSMyJGzAZllW4y19a3bKAbi7tSGb7tjztqVXndsshmchThu7tjGGJoolEoiS6+G7ot7G1iAR65+tZxbNxclsQsbseIBnjF+GRQLZKMmAtnbWg9n2JZu7xgVWKcZhIu0Sn4C8miuRfwjTrTDjNyy7H7I4kJzERPjIsT4To2mhsfWpNtrB4uErLi4ZAkrC8zG/laX8h6XyzGlTLdHYcUuMTEwQmOKNbszZlpNFRDzAFyx62qjn2aJkYq6lWGRBBBB6EHMViDXVe924uD2iv3ycMlspUssg97WYeRqit8+zLF4C7gd/CP/ADEBuo/rTUeoyqGoYr1tSSk1ehqKWq1ZUkV63LJRHZNFFFEFFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRavKKDGSMEEEXBFiDzB5VC17MsGH4ryd3f/AArjh/Te1+HyvXlFEN8PZkYJy2DxLQxte4sWdL8ka+Y6cV7ZVOdj7Njw0SxRCyr1zLE5lmPMk5k0UVVLHjBBBAIORBAIPqK9VABYCwGgGQFFFQZViwoooivN8+yjC4zieC2HmNzdR92xPNkHPzFq562rgWw80kLlS0bcJ4SSvsSAfpRRRqEwNZA15RRX/9k=',
    description: 'Precision-machined pipeline joints with exceptional sealing capabilities for petrochemical applications.',
    link: '/contact',
  },
  {
    id: 7,
    title: 'Façade Fittings',
    category: 'architectural',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    description: 'Custom aluminum facade fittings for modern architectural applications, combining aesthetics with structural strength.',
    link: '/contact',
  },
  {
    id: 8,
    title: 'Decorative Metal Castings',
    category: 'architectural',
    image: 'https://2.imimg.com/data2/LB/UE/IMFCP-6210215/images-industrial-20castings-decorative-20castings-250x250.jpg',
    description: 'Decorative die-cast components for architectural applications, featuring intricate designs and superior finishes.',
    link: '/contact',
  },
];

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  return (
    <>
      <SEO 
        title="HPDC, CNC & Alloy Cast Components | SHEI Product Catalog"
        description="View SHEI's product range – precision-engineered HPDC and CNC machined parts for the automotive, textile, petroleum and construction industries."
        keywords="HPDC components, automotive die cast parts India, textile machine parts manufacturer"
      />
      
      <Hero 
        title="Engineered Components Built for Performance & Reliability"
        subtitle="Discover our diverse range of precision-engineered products manufactured using advanced die casting and CNC technologies."
        backgroundImage="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
      />
      
      {/* Products Showcase */}
      <section className="py-20">
        <div className="container">
          <SectionTitle 
            title="Our Product Range"
            subtitle="Browse our comprehensive portfolio of precision-engineered components for various industries."
          />
          
          {/* Category Filter */}
          <div className="flex items-center mb-8 overflow-x-auto pb-4">
            <Filter className="h-5 w-5 text-neutral-500 mr-3" />
            {/* <span className="text-neutral-700 mr-4 font-medium">Filter by:</span> */}
            
            <div className="flex space-x-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id}
                image={product.image}
                category={categories.find(cat => cat.id === product.category)?.name || ''}
                title={product.title}
                description={product.description}
                link={product.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <SectionTitle 
            title="Technologies We Use"
            subtitle="Our state-of-the-art manufacturing technologies ensure the highest quality products."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Settings className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Die Casting</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">High Pressure Die Casting (HPDC)</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">Low Pressure Die Casting (LPDC)</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">Gravity Die Casting (GDC)</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">Squeeze Die Casting (SDC)</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Settings className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Machining</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">CNC (Computer Numerical Control)</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">VMC (Vertical Machining Center)</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">HMC (Horizontal Machining Center)</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">Multi-Axis Machining</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Settings className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Surface Finishing</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">Anodizing</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">Powder Coating</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">Polishing</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">Plating</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Custom Solutions */}
      <section className="py-20 bg-primary-950 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Engineering Solutions</h2>
              <p className="text-neutral-200 mb-6">
                Beyond our standard product offerings, we specialize in developing custom components tailored to your specific requirements.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>Collaborative design and development</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>Rapid prototyping and testing</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>Material selection expertise</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>Process optimization for manufacturability</span>
                </li>
              </ul>
              <button className="btn btn-secondary">
                Request Custom Solution
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://www.alco.com/wp-content/uploads/2025/04/iStock-686518828.jpg" 
                alt="Custom Engineering Solutions" 
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Need Specific Components for Your Project?"
        description="Contact our team to discuss your requirements or request a detailed product catalog."
        primaryButtonText="Get Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Download Catalog"
        secondaryButtonLink="/catalog"
      />
    </>
  );
};

export default ProductsPage;