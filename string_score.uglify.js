String.prototype.score=function(a){var b=0,c=a.length,d=this,e=d.length,f=0,g,h;if(d===a)return 1;for(var i=0,j,k,l,m,n,o;i<c;++i){l=a[i],m=d.indexOf(l.toLowerCase()),n=d.indexOf(l.toUpperCase()),o=Math.min(m,n),k=o>-1?o:Math.max(m,n);if(k===-1)return 0;j=.1,d[k]===l&&(j+=.1),k===0&&(j+=.8,i===0&&(f=1)),d.charAt(k-1)===" "&&(j+=.8),d=d.substring(k+1,e),b+=j}g=b/c,h=(g*(c/e)+g)/2,f&&h+.1<1&&(h+=.1);return h}