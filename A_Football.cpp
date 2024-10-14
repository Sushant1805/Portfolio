#include <bits/stdc++.h>
 
using namespace std;
 
#define ll     long long
#define _test   int _TEST; cin>>_TEST; while(_TEST--)
#define pb     push_back
#define ppb    pop_back
#define pf     push_front
#define ppf    pop_front
#define vi     vector<int> vec
 
int main()
{
        ios::sync_with_stdio(false);
        cin.tie(nullptr);
        cout.tie(nullptr);

        string s;
        cin>>s;

        int cnt=0;
        int i=0;
        while(i < s.length()){
            while(s[i]=='1'){
            i++;
            cnt++;
            }

            if(cnt >= 7)
            cout<<"YES"<<endl,exit(0);
            else{
                cnt=0;
                while(s[i] != '1' && i <= s.length()){
                    i++;
                }
            }
        }
        i=0;
        cnt=0;
        while(i < s.length()){
            while(s[i]=='0'){
            i++;
            cnt++;
            }

            if(cnt >= 7)
            cout<<"YES"<<endl,exit(0);
            else{
                cnt=0;
                while(s[i] != '0' && i <= s.length()){
                    i++;
                }
            }
        }

        cout<<"NO"<<endl;
        
    
}
